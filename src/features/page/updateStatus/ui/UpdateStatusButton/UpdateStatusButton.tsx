import { FC } from "react";
import { Page } from "@/shared/types";
import { useUpdatePageStatusMutation } from "@/shared/api";

import Star from "@assets/icons/star.svg";
import Unstar from "@assets/icons/unstar.svg";
import FilledStar from "@assets/icons/star-filled.svg";

interface UpdateStatusButtonProps {
  page: Page;
  location: "sidebar" | "topbar";
  onClick?: () => void;
}

export const UpdateStatusButton: FC<UpdateStatusButtonProps> = ({
  page,
  location,
  onClick,
}) => {
  const [updateStatus] = useUpdatePageStatusMutation();
  const handleClick = () => {
    updateStatus({ id: page._id, favorite: !page.favorite });

    if (onClick) {
      onClick();
    }
  };
  let content;

  if (location === "sidebar") {
    content = page.favorite ? (
      <>
        <Unstar /> <p>Remove from Favorites</p>
      </>
    ) : (
      <>
        <Star width="16px" height="16px" /> <p>Add to Favorites</p>
      </>
    );
  }

  if (location === "topbar") {
    content = page.favorite ? (
      <FilledStar />
    ) : (
      <Star width="20px" height="20px" />
    );
  }
  return <button onClick={handleClick}>{content}</button>;
};
