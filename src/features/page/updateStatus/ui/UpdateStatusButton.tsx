import { FC } from "react";
import { Page } from "@/shared/types";
import { useUpdatePageStatusMutation } from "@/shared/api";

interface UpdateStatusButtonProps {
  page: Page;
}

export const UpdateStatusButton: FC<UpdateStatusButtonProps> = ({ page }) => {
  const [updateStatus] = useUpdatePageStatusMutation();

  return (
    <button
      onClick={() => updateStatus({ id: page._id, favorite: !page.favorite })}
    >
      {page.favorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
};
