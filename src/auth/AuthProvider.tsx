import { type JSX, type FC } from "react";
import Keycloak from "keycloak-js";

import { AuthContext } from "./AuthContext";

interface IProps {
  keycloak: Keycloak;
  children: JSX.Element;
}

const AuthProvider: FC<IProps> = ({ keycloak, children }) => {
  return (
    <AuthContext.Provider value={{ keycloak }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
