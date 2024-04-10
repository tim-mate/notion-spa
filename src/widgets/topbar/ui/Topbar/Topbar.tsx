import { FC } from "react";
import { Page } from "@/shared/types";
import { UpdateStatusButton } from "@/features/page/updateStatus";
import { ShowActionsButton } from "@/features/page/show-actions";
import { PageActionsPanel } from "../PageActionsPanel/PageActionsPanel";

import Dots from "@assets/icons/topbar-dots.svg";
import styles from "./Topbar.module.scss";

interface TopbarProps {
  page: Page;
}

export const Topbar: FC<TopbarProps> = ({ page }) => {
  return (
    <header className={styles["topbar"]}>
      <>
        <span className={styles["topbar__title"]}>{page.title}</span>

        <ul className={styles["topbar__actions-list"]}>
          <li>
            <UpdateStatusButton page={page} location="topbar" />
          </li>

          <li>
            <ShowActionsButton
              actionsPanel={<PageActionsPanel page={page} />}
              location="topbar"
            >
              <Dots />
            </ShowActionsButton>
          </li>
        </ul>
      </>
    </header>
  );
};
