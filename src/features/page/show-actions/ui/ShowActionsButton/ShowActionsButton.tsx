import { FC, ReactNode, useState } from "react";
import styles from "./ShowActionsButton.module.scss";
import { Modal } from "@/shared/ui";

interface ShowActionsButtonProps {
  actionsPanel: ReactNode;
}

export const ShowActionsButton: FC<ShowActionsButtonProps> = ({
  actionsPanel,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={styles["pages-list__button"]}
      >
        ...
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {actionsPanel}
      </Modal>
    </>
  );
};
