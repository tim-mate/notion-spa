import { PagesList } from "@/entities/page";
import { AddPageButton } from "@/features/page/add";

export const PagesNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <PagesList type="favorite" />
        </li>

        <li>
          <PagesList type="private" headerActionSlot={<AddPageButton />} />
        </li>
      </ul>
    </nav>
  );
};
