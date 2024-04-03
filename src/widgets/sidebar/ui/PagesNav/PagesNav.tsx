import { PagesList } from "@/entities/page";
import { AddPageButton } from "@/features/page/add";

import styles from "./PagesNav.module.scss";

export const PagesNav = () => {
  return (
    <nav className={styles["pages-nav"]}>
      <ul>
        <li className={styles["pages-nav__section"]}>
          <PagesList type="favorite" />
        </li>

        <li className={styles["pages-nav__section"]}>
          <PagesList type="private" headerActionSlot={<AddPageButton />} />
        </li>
      </ul>
    </nav>
  );
};
