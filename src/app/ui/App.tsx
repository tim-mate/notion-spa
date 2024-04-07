import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/workspace">Workspace</Link>
      </nav>

      <Outlet />
    </>
  );
};
