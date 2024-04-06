import { Sidebar } from "@/widgets/sidebar";
import { Topbar } from "@/widgets/topbar";
import { PageEditor } from "@/widgets/page-editor";

import styles from "./Workspace.module.scss";

const Workspace = () => {
  return (
    <div className={styles.workspace}>
      <Sidebar />
      <Topbar />
      <PageEditor />
    </div>
  );
};

export default Workspace;
