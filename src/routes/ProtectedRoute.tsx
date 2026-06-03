import { type FC, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

interface IProps {
  role: string;
  children: JSX.Element;
}

const ProtectedRoute: FC<IProps> = (props) => {
  const { role, children } = props;
  const { keycloak } = useAuth();

  const hasRole = keycloak.hasRealmRole(role);

  if (!keycloak.authenticated) {
    return <Navigate to="/" replace />;
  }

  if (!hasRole) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
