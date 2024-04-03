import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "@/shared/types";

import styles from "./PagesListItem.module.scss";

interface PagesListItemProps {
  page: Page;
}

export const PagesListItem: FC<PagesListItemProps> = ({ page }) => {
  const { currentPageId } = useParams();
  const classes =
    currentPageId === page._id
      ? styles["pages-list__item"] + " " + styles["pages-list__item--current"]
      : styles["pages-list__item"];

  return (
    <li className={classes}>
      <Link to={`${page._id}`} className={styles["pages-list__link"]}>
        {page.title}
      </Link>
    </li>
  );
};
