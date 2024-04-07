import { FC } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Page } from "@/shared/types";
import { useRenamePageMutation } from "@/shared/api";

import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  page: Page;
}

export const PageTitle: FC<PageTitleProps> = ({ page }) => {
  const [renamePage] = useRenamePageMutation();
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<h1>${page.title}</h1>`,
    editorProps: {
      attributes: {
        class: styles["page-title"],
      },
      handleKeyDown(view, event) {
        if (event.code === "Escape" || event.code === "Enter") {
          view.dom.blur();
        }
      },
    },
    onBlur: ({ editor }) => {
      const text = editor.getText().trim();
      if (text) {
        renamePage({ id: page._id, title: text });
      }
    },
  });

  return <EditorContent editor={editor as Editor} />;
};
