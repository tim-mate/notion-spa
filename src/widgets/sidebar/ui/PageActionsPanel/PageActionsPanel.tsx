import { Page } from "@/shared/types";
import { FC } from "react";
import { UpdateStatusButton } from "@/features/page/updateStatus";
import { DeletePageButton } from "@/features/page/delete";
import { RenamePageButton, RenamePageInput } from "@/features/page/rename";

import styles from "./PageActionsPanel.module.scss";

interface PageActionsPanelProps {
  page: Page;
}

export const PageActionsPanel: FC<PageActionsPanelProps> = ({ page }) => {
  return (
    <>
      <ul className={styles["actions-panel"]}>
        <li>
          <UpdateStatusButton page={page} />
        </li>

        <li>
          <RenamePageButton renamePageInput={<RenamePageInput page={page} />} />
        </li>

        <li>
          <DeletePageButton page={page} />
        </li>
      </ul>
    </>
  );
};
