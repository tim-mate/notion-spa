import { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Trash from "@assets/icons/trash.svg";
import { Page } from "@/shared/types";
import { useDeletePageMutation } from "@/shared/api";

interface DeletePageButtonProps {
  page: Page;
  onClick?: () => void;
}

export const DeletePageButton: FC<DeletePageButtonProps> = ({
  page,
  onClick,
}) => {
  const { currentPageId } = useParams();
  const navigate = useNavigate();
  const [deletePage] = useDeletePageMutation();

  const handleClick = () => {
    deletePage(page._id);
    if (page._id === currentPageId) {
      navigate("/workspace");
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      <Trash /> <p>Delete</p>
    </button>
  );
};
