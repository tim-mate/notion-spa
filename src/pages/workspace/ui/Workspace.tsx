import { Sidebar } from "@/widgets/sidebar";
import { Topbar } from "@/widgets/topbar";
import { PageEditor } from "@/widgets/page-editor";

import styles from "./Workspace.module.scss";
import { useParams } from "react-router-dom";
import { useGetPageQuery } from "@/shared/api";
import { ID } from "@/shared/types";

const Workspace = () => {
  const { currentPageId } = useParams();
  const { data: page } = useGetPageQuery(currentPageId as ID, {
    skip: !currentPageId,
  });

  return (
    <div className={styles.workspace}>
      <Sidebar />
      {page && (
        <>
          <Topbar page={page} />
          <PageEditor page={page} key={page._id} />
        </>
      )}
    </div>
  );
};

export default Workspace;
