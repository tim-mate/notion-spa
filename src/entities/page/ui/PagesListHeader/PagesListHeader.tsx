import { FC, ReactNode } from "react";
import styles from "./PagesListHeader.module.scss";

interface PagesListHeaderProps {
  type: "private" | "favorite";
  actionSlot?: ReactNode;
}

export const PagesListHeader: FC<PagesListHeaderProps> = ({
  type,
  actionSlot,
}) => {
  return (
    <div className={styles["pages-list__header"]}>
      <h2>{type === "favorite" ? "Favorites" : "Private"}</h2>
      {actionSlot}
    </div>
  );
};
