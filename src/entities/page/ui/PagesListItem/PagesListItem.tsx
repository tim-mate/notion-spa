import { FC } from "react";
import { Link } from "react-router-dom";
import { Page } from "@/shared/types";

interface PagesListItemProps {
  page: Page;
}

export const PagesListItem: FC<PagesListItemProps> = ({ page }) => {
  return <Link to={`${page._id}`}>{page.title}</Link>;
};
