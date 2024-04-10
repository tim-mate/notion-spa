import { CSSProperties } from "react";

export const calculateModalPosition = (y: number): CSSProperties => ({
  top: y - 40,
  left: "6px",
});
