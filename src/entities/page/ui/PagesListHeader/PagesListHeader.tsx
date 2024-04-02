import { FC, ReactNode } from "react";
import styles from "./Header.module.scss";

interface PagesListHeaderProps {
  type: "private" | "favorite";
  actionSlot?: ReactNode;
}

export const PagesListHeader: FC<PagesListHeaderProps> = ({
  type,
  actionSlot,
}) => {
  return (
    <div className={styles.header}>
      <h2>{type === "favorite" ? "Favorites" : "Private"}</h2>
      {actionSlot}
    </div>
  );
};
