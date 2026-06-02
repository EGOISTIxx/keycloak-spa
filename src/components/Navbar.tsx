import type { FC } from "react";
import {
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import { useAuth } from "../auth/useAuth";

const Navbar: FC = () => {
  const { keycloak } = useAuth();

  return (
    <Masthead>
      <MastheadMain>
        <MastheadBrand>Keycloak SPA</MastheadBrand>
      </MastheadMain>

      <MastheadContent>
        <Toolbar isFullHeight>
          <ToolbarContent
            style={{
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <ToolbarItem>
              {keycloak.authenticated ? (
                <Button variant="secondary" onClick={() => keycloak.logout()}>
                  Logout
                </Button>
              ) : (
                <Button variant="primary" onClick={() => keycloak.login()}>
                  Login
                </Button>
              )}
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );
};

export default Navbar;
