import { FC } from "react";
import { useGetPagesQuery } from "@/shared/api";
import { PagesListHeader } from "@/entities/page";
import { PagesListItem } from "@/entities/page";
import { AddPageButton } from "@/features/page/add";
import { ShowActionsButton } from "@/features/page/show-actions";
import { PageActionsPanel } from "../PageActionsPanel/PageActionsPanel";

interface PagesListProps {
  type: "private" | "favorite";
}

export const PagesList: FC<PagesListProps> = ({ type }) => {
  const { data } = useGetPagesQuery();
  const pages =
    type === "favorite" ? data?.filter((page) => page.favorite) : data;

  return (
    <>
      <PagesListHeader type={type} actionSlot={<AddPageButton />} />

      <ul>
        {pages?.map((page) => (
          <PagesListItem
            key={page._id}
            page={page}
            actionSlot={
              <ShowActionsButton
                actionsPanel={<PageActionsPanel pageId={page._id} />}
              />
            }
          />
        ))}
      </ul>
    </>
  );
};
