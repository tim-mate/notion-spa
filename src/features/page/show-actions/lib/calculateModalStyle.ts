import { CSSProperties } from "react";

export const calculateModalStyle = (
  location: "sidebar" | "topbar",
  x: number,
  y: number
): CSSProperties => {
  return location === "sidebar"
    ? {
        maxWidth: "265px",
        left: x,
        top: y,
      }
    : { maxWidth: "236px", top: "45px", left: "calc(100vw - 248px)" };
};
