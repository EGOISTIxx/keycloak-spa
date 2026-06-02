import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import ProtectedRoute from "../routes/ProtectedRoute";

const AppRouter = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: 20,
          padding: 20,
        }}
      >
        <Link to="/">Главная</Link>
        <Link to="/protected">Защищенная страница</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/protected"
          element={
            <ProtectedRoute role="app-user">
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
