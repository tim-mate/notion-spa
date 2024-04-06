import { Sidebar } from "@/widgets/sidebar";
import { Topbar } from "@/widgets/topbar";

import styles from "./Workspace.module.scss";

const Workspace = () => {
  return (
    <div className={styles.workspace}>
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default Workspace;
