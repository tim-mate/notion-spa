import { useParams } from "react-router-dom";

import { Sidebar } from "@/widgets/sidebar";
import { Topbar } from "@/widgets/topbar";
import { PageEditor } from "@/widgets/page-editor";
import { ID } from "@/shared/types";
import { useGetPageQuery } from "@/shared/api";

import styles from "./Workspace.module.scss";
import EmptyWorkspace from "@assets/images/notion-parade.png";

const Workspace = () => {
  const { currentPageId } = useParams();
  const { data: page } = useGetPageQuery(currentPageId as ID, {
    skip: !currentPageId,
  });

  return (
    <div className={styles.workspace}>
      <Sidebar />

      {currentPageId && page ? (
        <>
          <Topbar page={page} />
          <PageEditor page={page} key={page._id} />
        </>
      ) : (
        <div className={styles["image-container"]}>
          <img
            src={EmptyWorkspace}
            alt="Empty workspace"
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default Workspace;
