import { FC } from "react";
import { Page } from "@/shared/types";
import { useDeletePageMutation } from "@/shared/api";

interface DeletePageButtonProps {
  page: Page;
}

export const DeletePageButton: FC<DeletePageButtonProps> = ({ page }) => {
  const [deletePage] = useDeletePageMutation();

  return <button onClick={() => deletePage(page._id)}>Delete</button>;
};
