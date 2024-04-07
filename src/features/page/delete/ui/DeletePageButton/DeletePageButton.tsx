import { FC } from "react";
import { Page } from "@/shared/types";
import { useDeletePageMutation } from "@/shared/api";
import { useParams, useNavigate } from "react-router-dom";

interface DeletePageButtonProps {
  page: Page;
}

export const DeletePageButton: FC<DeletePageButtonProps> = ({ page }) => {
  const { currentPageId } = useParams();
  const navigate = useNavigate();
  const [deletePage] = useDeletePageMutation();

  const handleClick = () => {
    deletePage(page._id);

    if (page._id === currentPageId) {
      navigate("/workspace");
    }
  };

  return <button onClick={handleClick}>Delete</button>;
};
