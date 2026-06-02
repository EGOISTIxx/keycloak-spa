import {
  Card,
  CardBody,
  CardTitle,
  List,
  ListItem,
  PageSection,
} from "@patternfly/react-core";
import { useAuth } from "../auth/useAuth";

const HomePage = () => {
  const { keycloak } = useAuth();

  if (!keycloak.authenticated) {
    return (
      <PageSection>
        <Card>
          <CardBody>Not authenticated</CardBody>
        </Card>
      </PageSection>
    );
  }

  const token = keycloak.tokenParsed;

  const roles = token?.realm_access?.roles ?? [];

  return (
    <PageSection>
      <Card>
        <CardTitle>Профиль пользователя</CardTitle>

        <CardBody>
          <p>
            <strong>Имя:</strong> {token?.name}
          </p>

          <p>
            <strong>Email:</strong> {token?.email}
          </p>

          <strong>Роли:</strong>

          <List>
            {roles.map((role: string) => (
              <ListItem key={role}>{role}</ListItem>
            ))}
          </List>
        </CardBody>
      </Card>
    </PageSection>
  );
};

export default HomePage;
