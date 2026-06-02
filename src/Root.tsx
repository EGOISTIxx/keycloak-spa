import { useEffect, useState } from "react";
import { Alert, AlertVariant, Bullseye, Spinner } from "@patternfly/react-core";
import keycloak from "./auth/keycloak";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";

const Root = () => {
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "check-sso",
        pkceMethod: "S256",
        checkLoginIframe: false,
        silentCheckSsoRedirectUri:
          `${window.location.origin}/silent-check-sso.html`,
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Failed to initialize authentication"
        );
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Bullseye>
        <Spinner size="xl" />
      </Bullseye>
    );
  }

  if (error) {
    return (
      <Bullseye>
        <Alert
          variant={AlertVariant.danger}
          title={error}
        />
      </Bullseye>
    );
  }

  return (
    <AuthProvider keycloak={keycloak}>
      <App />
    </AuthProvider>
  );
}

export default Root;
