import { FC, useEffect } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import { Page } from "@/shared/types";
import { useRenamePageMutation } from "@/shared/api";
import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  page: Page;
}

const TITLE_PLACEHOLDER = "Untitled";

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: TITLE_PLACEHOLDER,
  }),
];

export const PageTitle: FC<PageTitleProps> = ({ page }) => {
  const [renamePage] = useRenamePageMutation();
  const editor = useEditor({
    extensions,
    content: page.title === "Untitled" ? "" : `<h1>${page.title}</h1>`,
    onUpdate: ({ editor }) => {
      const title = editor.getText().trim();
      if (title) {
        renamePage({ id: page._id, title });
      }
    },
    editorProps: {
      attributes: {
        class: styles["page-title"],
      },
      handleKeyDown(view, event) {
        if (event.code === "Escape" || event.code === "Enter") {
          view.dom.blur();
        }

        if (event.code === "Enter") {
          return true;
        }

        return false;
      },
    },
  });

  useEffect(() => {
    if (editor && !editor.isFocused) {
      editor.commands.setContent(`<h1>${page.title}</h1>`);
    }
  }, [page.title]);

  return <EditorContent editor={editor as Editor} />;
};
