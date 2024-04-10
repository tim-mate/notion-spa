import { FC, ChangeEventHandler, useState, useEffect, useRef } from "react";
import { Page } from "@/shared/types";
import { useRenamePageMutation } from "@/shared/api";
import styles from "./RenamePageInput.module.scss";

interface RenamePageInputProps {
  page: Page;
  onFinish?: () => void;
}

export const RenamePageInput: FC<RenamePageInputProps> = ({
  page,
  onFinish,
}) => {
  const [title, setTitle] = useState(page.title);
  const inputRef = useRef<HTMLInputElement>(null);
  const [renamePage] = useRenamePageMutation();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);

    if (e.target.value.trim() !== "") {
      renamePage({ id: page._id, title: e.target.value });
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = function (this: Window, e: KeyboardEvent) {
      if (e.code === "Enter" && onFinish) {
        onFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onFinish]);

  return (
    <input
      ref={inputRef}
      type="text"
      name="title"
      value={title}
      onChange={handleInputChange}
      className={styles["rename-page-input"]}
    />
  );
};
