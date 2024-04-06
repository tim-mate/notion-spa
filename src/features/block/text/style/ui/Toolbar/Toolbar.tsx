import { FC } from "react";
import { Editor } from "@tiptap/react";
import { ColorPicker } from "../ColorPicker/ColorPicker";

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
    <div>
      <button onClick={handleBold}>Bold</button>
      <button onClick={handleItalic}>Italic</button>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleUnderline}>Underline</button>
      <ColorPicker onChange={handleTextColor} />
    </div>
  );
};
