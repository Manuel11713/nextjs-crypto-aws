import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm, SignUpForm } from "components/inputs";
import { useUser } from "providers";
import { navigate } from "gatsby-link";

const Login = () => {
  const [showLogin, setShowLoign] = useState(true);
  const { user } = useUser();
  if (user) navigate("/");
  return (
    <LoginStyles>
      {showLogin ? (
        <LoginForm setShowLoign={setShowLoign} />
      ) : (
        <SignUpForm setShowLoign={setShowLoign} />
      )}
    </LoginStyles>
  );
};

export default Login;

const LoginStyles = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: #ececec;
  padding: 50px;
`;
