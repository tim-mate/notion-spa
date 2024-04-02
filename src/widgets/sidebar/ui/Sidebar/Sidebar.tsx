import { PagesNav } from "../PagesNav/PagesNav";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <PagesNav />
    </aside>
  );
};
