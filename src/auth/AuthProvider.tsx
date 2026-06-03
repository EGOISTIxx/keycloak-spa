import { type JSX, type FC } from "react";
import Keycloak from "keycloak-js";

import { AuthContext } from "./AuthContext";

interface IProps {
  keycloak: Keycloak;
  children: JSX.Element;
}

const AuthProvider: FC<IProps> = (props) => {
  const { keycloak, children } = props;

  return (
    <AuthContext.Provider value={{ keycloak }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
