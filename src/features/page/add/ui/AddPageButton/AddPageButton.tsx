import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import Plus from "@assets/icons/plus.svg";
import { useAddPageMutation } from "@/shared/api";
import styles from "./AddPageButton.module.scss";

export const AddPageButton = () => {
  const navigate = useNavigate();
  const [addPage] = useAddPageMutation();

  const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
    const result = await addPage({});
    if ("data" in result) {
      navigate(`/workspace/${result.data._id}`);
    }
  };

  return (
    <button onClick={handleClick} className={styles["add-page-button"]}>
      <Plus />
    </button>
  );
};
