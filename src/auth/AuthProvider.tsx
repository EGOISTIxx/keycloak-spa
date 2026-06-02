import { type JSX } from "react";
import Keycloak from "keycloak-js";

import { AuthContext } from "./AuthContext";

interface Props {
  keycloak: Keycloak;
  children: JSX.Element;
}

export default function AuthProvider({ keycloak, children }: Props) {
  return (
    <AuthContext.Provider value={{ keycloak }}>{children}</AuthContext.Provider>
  );
}
