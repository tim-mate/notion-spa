export type Token = string;

export interface User {
  name: string;
  email: string;
}

export interface SignupUserDto {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserDto {
  name: string;
  email: string;
}

type BlockType = "text" | "table";

export type ID = string;

interface TextStyles {
  color: string;
  backgroundColor: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
  strikethrough: boolean;
}

export interface TextBlockPayload extends TextStyles {
  content: string;
}

interface TableBlockPayload {
  table: { text: string; styles: TextStyles }[][];
  styles: {
    rows: { color: string; backgroundColor: string }[];
    columns: { color: string; backgroundColor: string }[];
  };
  headerRow: boolean;
  headerColumn: boolean;
}

export type BlockPayload<T extends BlockType> = T extends "text"
  ? TextBlockPayload
  : T extends "table"
  ? TableBlockPayload
  : never;

interface Block {
  _id: ID;
  type: BlockType;
  payload: BlockPayload<"text" | "table">;
}

export interface Page {
  _id: ID;
  title: string;
  owner: ID;
  favorite: boolean;
  blocks: Block[];
}

export interface RenamePageDto {
  id: ID;
  title: string;
}

export interface UpdatePageStatusDto {
  id: ID;
  favorite: boolean;
}

export interface AddBlockDto {
  id: ID;
  type: BlockType;
}

export interface DeleteBlockDto {
  pageId: ID;
  blockId: ID;
}

export interface UpdateBlockDto {
  pageId: ID;
  blockId: ID;
  type: BlockType;
  payload: BlockPayload<"text" | "table">;
}
