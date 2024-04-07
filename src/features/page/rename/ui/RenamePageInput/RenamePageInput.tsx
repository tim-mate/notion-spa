import { FC, ChangeEventHandler, useState } from "react";
import { Page } from "@/shared/types";
import { useRenamePageMutation } from "@/shared/api";

interface RenamePageInputProps {
  page: Page;
}

export const RenamePageInput: FC<RenamePageInputProps> = ({ page }) => {
  const [title, setTitle] = useState(page.title);
  const [renamePage] = useRenamePageMutation();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);

    if (e.target.value.trim() !== "") {
      renamePage({ id: page._id, title: e.target.value });
    }
  };

  return (
    <input
      type="text"
      name="title"
      value={title}
      onChange={handleInputChange}
    />
  );
};
