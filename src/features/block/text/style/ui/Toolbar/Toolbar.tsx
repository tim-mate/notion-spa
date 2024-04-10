import { FC } from "react";
import { Editor } from "@tiptap/react";
import { ColorPicker } from "../ColorPicker/ColorPicker";

import styles from "./Toolbar.module.scss";

interface ToolbarProps {
  editor: Editor;
}

export const Toolbar: FC<ToolbarProps> = ({ editor }) => {
  const handleBold = () => editor.chain().focus().toggleBold().run();
  const handleItalic = () => editor.chain().focus().toggleItalic().run();
  const handleStrike = () => editor.chain().focus().toggleStrike().run();
  const handleUnderline = () => editor.chain().focus().toggleUnderline().run();

  const handleTextColor = (color: string) =>
    editor.chain().focus().setColor(color).run();

  return (
    <ul className={styles.toolbar}>
      <li className={styles["toolbar__item"]}>
        <button onClick={handleBold} className={styles.bold}>
          B
        </button>
      </li>
      <li className={styles["toolbar__item"]}>
        <button onClick={handleItalic} className={styles.italic}>
          i
        </button>
      </li>
      <li className={styles["toolbar__item"]}>
        <button onClick={handleStrike} className={styles.striked}>
          U
        </button>
      </li>
      <li className={styles["toolbar__item"]}>
        <button onClick={handleUnderline} className={styles.underlined}>
          S
        </button>
      </li>
      <li className={styles["toolbar__item"]}>
        <ColorPicker onChange={handleTextColor} />
      </li>
    </ul>
  );
};
