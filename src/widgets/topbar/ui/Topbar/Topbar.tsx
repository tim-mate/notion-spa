import { FC } from "react";
import { Page } from "@/shared/types";
import { UpdateStatusButton } from "@/features/page/updateStatus";
import { ShowActionsButton } from "@/features/page/show-actions";
import { PageActionsPanel } from "../PageActionsPanel/PageActionsPanel";

import styles from "./Topbar.module.scss";

interface TopbarProps {
  page: Page;
}

export const Topbar: FC<TopbarProps> = ({ page }) => {
  return (
    <header className={styles["topbar"]}>
      <>
        <span>{page?.title}</span>

        <ul className={styles["topbar__buttons-list"]}>
          <li>
            <UpdateStatusButton page={page!} />
          </li>

          <li>
            <ShowActionsButton
              actionsPanel={<PageActionsPanel page={page!} />}
            />
          </li>
        </ul>
      </>
    </header>
  );
};
