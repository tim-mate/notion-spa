import { Block, TextBlockPayload } from "@/shared/types";

export const calculatePageContent = (block: Block): string => {
  const payload = block.payload as TextBlockPayload;
  return payload.content;
};
