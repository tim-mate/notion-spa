import { FC, ChangeEventHandler, useState } from "react";

interface ColorPickerProps {
  onChange: (color: string) => void;
}

export const ColorPicker: FC<ColorPickerProps> = ({ onChange }) => {
  const [color, setColor] = useState("#000000");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onChange(newColor);
  };

  return <input type="color" value={color} onChange={handleChange} />;
};
