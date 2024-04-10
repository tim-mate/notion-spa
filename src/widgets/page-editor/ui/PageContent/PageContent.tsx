import { FC, useRef, useEffect } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";

import { calculatePageContent } from "../../lib/calculatePageContent";
import { Page, TextBlockPayload, Block } from "@/shared/types";
import { useUpdateBlockMutation } from "@/shared/api";
import { Toolbar } from "@/features/block/text/style";
import styles from "./PageContent.module.scss";

interface PageContentProps {
  page: Page;
}

const extensions = [StarterKit, TextStyle, Underline, Color];

export const PageContent: FC<PageContentProps> = ({ page }) => {
  const [updateBlock] = useUpdateBlockMutation();
  const blockRef = useRef<Block>(
    page.blocks.find((block) => block.type === "text") as Block
  );

  const editor = useEditor({
    extensions,
    content: calculatePageContent(blockRef.current),
    editorProps: {
      attributes: {
        class: styles["page-content"],
      },
    },
    onUpdate: ({ editor }) => {
      const payload = { content: editor.getHTML() } as TextBlockPayload;

      if (blockRef.current) {
        updateBlock({
          pageId: page._id,
          blockId: blockRef.current._id,
          type: "text",
          payload,
        });
      }
    },
  });

  useEffect(() => {
    if (editor) {
      editor.commands.focus("end");
    }
  }, [editor]);

  return (
    <>
      {editor && (
        <EditorContent editor={editor}>
          <BubbleMenu editor={editor}>
            <Toolbar editor={editor} />
          </BubbleMenu>
        </EditorContent>
      )}
    </>
  );
};
