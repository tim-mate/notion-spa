import { FC } from "react";
import { Page } from "@/shared/types";
import { PageTitle } from "../PageTitle/PageTitle";
import { PageContent } from "../PageContent/PageContent";
import styles from "./PageEditor.module.scss";

interface PageEditorProps {
  page: Page;
}

export const PageEditor: FC<PageEditorProps> = ({ page }) => {
  return (
    <main className={styles["page-editor"]}>
      <PageTitle page={page} />
      <PageContent page={page} />
    </main>
  );
};
