import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import { useAuth } from "./auth/useAuth";

const App = () => {
  const { keycloak } = useAuth();

  useEffect(() => {
    if (!keycloak.authenticated) {
      return;
    }

    const interval = setInterval(
      async () => {
        try {
          await keycloak.updateToken(60);
        } catch {
          keycloak.clearToken();
          keycloak.login();
        }
      },
      30000
    );

    return () =>
      clearInterval(interval);
  }, [keycloak]);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;