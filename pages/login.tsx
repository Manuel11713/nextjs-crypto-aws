import { useState } from "react";
import { LoginForm, SignUpForm } from "components/inputs";
import { useUser } from "providers";
import { useRouter } from "next/router";
import { ButtonBack } from "components/elements";

const Login = () => {
  const [showLogin, setShowLoign] = useState(true);
  const { user } = useUser();
  const router = useRouter();
  if (user) router.push("/");
  return (
    <div>
      <ButtonBack />

      {showLogin ? (
        <LoginForm setShowLoign={setShowLoign} />
      ) : (
        <SignUpForm setShowLoign={setShowLoign} />
      )}
    </div>
  );
};

export default Login;
