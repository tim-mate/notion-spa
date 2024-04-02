import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/workspace">Workspace</Link>

      <Outlet />
    </>
  );
};
