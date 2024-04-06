import { Page } from "@/shared/types";
import { FC } from "react";
import { DeletePageButton } from "@/features/page/delete";

interface PageActionsPanelProps {
  page: Page;
}

export const PageActionsPanel: FC<PageActionsPanelProps> = ({ page }) => {
  return (
    <>
      <ul>
        <li>
          <DeletePageButton page={page} />
        </li>
      </ul>
    </>
  );
};
