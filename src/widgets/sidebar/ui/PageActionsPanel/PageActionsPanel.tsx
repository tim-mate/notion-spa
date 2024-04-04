import { ID } from "@/shared/types";
import { FC } from "react";

interface PageActionsPanelProps {
  pageId: ID;
}

export const PageActionsPanel: FC<PageActionsPanelProps> = ({ pageId }) => {
  return (
    <div>
      <b>{pageId}</b>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed!
    </div>
  );
};
