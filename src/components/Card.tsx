import {
  Card,
  CardTitle,
  CardBody,
  List,
  ListItem
} from "@patternfly/react-core";
import type { FC } from "react";

interface IProps {
  name: string;
  email: string;
  roles: string[];
}

const UserProfile: FC<IProps> = (props) => {
  const { name, email, roles } = props;

  return (
    <Card>
      <CardTitle>User Profile</CardTitle>

      <CardBody>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <strong>Roles:</strong>
        <List>
          {roles.map(role => (
            <ListItem key={role}>
              {role}
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
}

export default UserProfile;