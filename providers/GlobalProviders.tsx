import React, { FC } from "react";
import { NotificationProvider } from "./Notifications";
import { UserProvdier } from "./UserProvider";

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export const GlobalProvider: FC = ({ children }) => {
  return (
    <ProviderComposer contexts={[<NotificationProvider />, <UserProvdier />]}>
      {children}
    </ProviderComposer>
  );
};
