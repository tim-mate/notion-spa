import { FC } from "react";

import { Page } from "@/shared/types";
import { UpdateStatusButton } from "@/features/page/updateStatus";
import { DeletePageButton } from "@/features/page/delete";
import { RenamePageButton, RenamePageInput } from "@/features/page/rename";
import styles from "./PageActionsPanel.module.scss";

interface PageActionsPanelProps {
  page: Page;
  onAction?: () => void;
  onRenameAction?: () => void;
}

export const PageActionsPanel: FC<PageActionsPanelProps> = ({
  page,
  onAction,
  onRenameAction,
}) => {
  return (
    <ul className={styles["actions-panel"]}>
      <li>
        <UpdateStatusButton onClick={onAction} page={page} location="sidebar" />
      </li>

      <li>
        <RenamePageButton
          onClick={onRenameAction}
          onFinish={onAction}
          inputSlot={<RenamePageInput onFinish={onAction} page={page} />}
        />
      </li>

      <li>
        <DeletePageButton onClick={onAction} page={page} />
      </li>
    </ul>
  );
};
