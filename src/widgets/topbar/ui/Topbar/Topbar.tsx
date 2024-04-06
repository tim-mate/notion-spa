import { useParams } from "react-router-dom";
import { useGetPageQuery } from "@/shared/api";
import { UpdateStatusButton } from "@/features/page/updateStatus";
import { ShowActionsButton } from "@/features/page/show-actions";
import { PageActionsPanel } from "../PageActionsPanel/PageActionsPanel";

import styles from "./Topbar.module.scss";

export const Topbar = () => {
  const { currentPageId } = useParams();
  const { data: page } = useGetPageQuery(currentPageId!);

  return (
    <header className={styles["topbar"]}>
      {page && (
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
      )}
    </header>
  );
};
