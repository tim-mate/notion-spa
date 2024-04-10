import { FC } from "react";
import { Page } from "@/shared/types";
import { DeletePageButton } from "@/features/page/delete";
import styles from "./PageActionsPanel.module.scss";

interface PageActionsPanelProps {
  page: Page;
  onAction?: () => void;
}

export const PageActionsPanel: FC<PageActionsPanelProps> = ({
  page,
  onAction,
}) => {
  return (
    <>
      <ul className={styles["actions-panel"]}>
        <li>
          <DeletePageButton page={page} onClick={onAction} />
        </li>
      </ul>
    </>
  );
};
