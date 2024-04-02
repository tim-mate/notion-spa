import { FC, ReactNode } from "react";
import { useGetPagesQuery } from "@/shared/api";
import { PagesListHeader } from "../PagesListHeader/PagesListHeader";
import { PagesListItem } from "../PagesListItem/PagesListItem";

interface PagesListProps {
  type: "private" | "favorite";
  headerActionSlot?: ReactNode;
}

export const PagesList: FC<PagesListProps> = ({ type, headerActionSlot }) => {
  const { data } = useGetPagesQuery();
  const pages =
    type === "favorite" ? data?.filter((page) => page.favorite) : data;

  return (
    <>
      <PagesListHeader type={type} actionSlot={headerActionSlot} />

      <ul>
        {pages?.map((page) => (
          <li key={page._id}>
            <PagesListItem page={page} />
          </li>
        ))}
      </ul>
    </>
  );
};
