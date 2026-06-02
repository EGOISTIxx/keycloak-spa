import { createContext } from "react";
import Keycloak from "keycloak-js";

export interface IAuthContextValue {
  keycloak: Keycloak;
}

export const AuthContext =
  createContext<IAuthContextValue | null>(
    null
  );