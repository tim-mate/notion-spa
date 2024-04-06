import { useParams } from "react-router-dom";
import { useGetPageQuery } from "@/shared/api";
import { PageTitle } from "../PageTitle/PageTitle";

import styles from "./PageEditor.module.scss";

export const PageEditor = () => {
  const { currentPageId } = useParams();
  const { data: page } = useGetPageQuery(currentPageId!);

  return (
    <main className={styles["page-editor"]}>
      {page && <PageTitle page={page} />}
    </main>
  );
};
