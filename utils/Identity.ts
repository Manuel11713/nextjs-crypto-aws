import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: String(process.env.NEXT_PUBLIC_GATSBY_COGNITO_USER_POOL_ID),
  ClientId: String(process.env.NEXT_PUBLIC_GATSBY_COGNITO_CLIENT_ID),
};

export const cognitoUserPool = new CognitoUserPool(poolData);

export type ISignUpObject = {
  name: string;
  birthdate: any;
  address: string;
  email: string;
  gender: string;
  password: string;
};

export type ILogInObject = {
  name: string;
  password: string;
};

export const parseUserAtributes = (values: ISignUpObject) => {
  const UserAtributes = Object.keys(values)
    .filter((key) => key !== "password")
    .map((key) => {
      const userAtributesData = {
        Name: key,
        Value: values[key],
      };
      return new CognitoUserAttribute(userAtributesData);
    });
  return UserAtributes;
};
