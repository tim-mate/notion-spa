import { FC, useRef } from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";

import { useUpdateBlockMutation } from "@/shared/api";
import { Page, BlockPayload, Block } from "@/shared/types";
import { Toolbar } from "@/features/block/text/style";

import styles from "./PageContent.module.scss";

interface PageContentProps {
  page: Page;
}

export const PageContent: FC<PageContentProps> = ({ page }) => {
  const [updateBlock] = useUpdateBlockMutation();
  const blockRef = useRef<Block>();
  const content = page.blocks.reduce((markup: string, block: Block) => {
    if (block.type === "text") {
      blockRef.current = block;
      const payload = block.payload as BlockPayload<"text">;
      return (markup += payload.content);
    }

    return markup;
  }, "");

  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Underline, Color],
    content: content === "" ? "Start writing..." : content,
    editorProps: {
      attributes: {
        class: styles["page-content"],
      },
    },
    onUpdate: ({ editor }) => {
      const payload = { content: editor.getHTML() } as BlockPayload<"text">;

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
