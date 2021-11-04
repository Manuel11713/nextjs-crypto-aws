import React from "react";
import Header from "components/header";
import { GlobalProvider } from "providers";

const MainLayout = ({ children, pathname }) => {
  return (
    <GlobalProvider>
      {!pathname.startsWith("/login") && <Header />}
      {children}
    </GlobalProvider>
  );
};

export default MainLayout;
