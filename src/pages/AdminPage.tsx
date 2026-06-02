import type { FC } from "react";

const AdminPage: FC = () => {
  return (
    <div>
      <h2>Защищенная страница</h2>
      <p>Только пользователи с определённой ролью могут видеть это.</p>
    </div>
  );
}

export default AdminPage;
