import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Link to="/login" className={styles.link}>
        Login
      </Link>
      <Link to="/signup" className={styles.link}>
        Signup
      </Link>
      <Link to="/workspace" className={styles.link}>
        Workspace
      </Link>
      <Outlet />
    </>
  );
};
