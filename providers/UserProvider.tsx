import React, {
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import {
  parseUserAtributes,
  cognitoUserPool,
  ISignUpObject,
  ILogInObject,
} from "utils";
import { useNotification } from "providers";
import {
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { useRouter } from "next/router";

type IinitialValues = {
  signUp: (values: ISignUpObject) => void;
  login: (values: ILogInObject) => void;
  logOut: () => void;
  user: undefined | CognitoUserAttribute[];
};

const initialValues: IinitialValues = {
  signUp: (values: ISignUpObject) => {
    values;
  },
  login: (values: ILogInObject) => {
    values;
  },
  logOut: () => {},
  user: undefined,
};

const UserContext = createContext(initialValues);

export const UserProvdier: FC = ({ children }) => {
  const [user, setUser] = useState<undefined | CognitoUserAttribute[]>();
  const { showNotitication } = useNotification();
  const router = useRouter();

  const login = (values: ILogInObject) => {
    const cognitoUser = new CognitoUser({
      Username: values.name,
      Pool: cognitoUserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: values.name,
      Password: values.password,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: () => {
        cognitoUser.getUserAttributes((err, attributes) => {
          if (err || !attributes)
            return showNotitication("Error getting user attributes");
          setUser(attributes);
          router.push("/");
        });
      },
      onFailure: (err) => {
        console.log("onFail: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("new pass: ", data);
      },
    });
  };

  const signUp = (values: ISignUpObject) => {
    const UserAtributes = parseUserAtributes(values);

    cognitoUserPool.signUp(
      values.name,
      values.password,
      UserAtributes,
      UserAtributes,
      (err, _) => {
        if (err) {
          console.log(err);
          return showNotitication(
            "You must fill all fields, please!!",
            "error"
          );
        }
        router.push("/send-email/");
      }
    );
  };

  const logOut = () => {
    const userCognito = cognitoUserPool.getCurrentUser();
    if (userCognito) {
      userCognito.signOut();
      setUser(undefined);
    }
  };

  const getUser = () => {
    const userCognito = cognitoUserPool.getCurrentUser();
    if (userCognito) {
      userCognito.getSession(() => {
        userCognito.getUserAttributes((err, attributes) => {
          if (err || !attributes) return;
          setUser(attributes);
        });
      });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ signUp, login, user, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
