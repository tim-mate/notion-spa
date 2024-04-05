import { FC, ReactNode, useState } from "react";
import { Modal } from "@/shared/ui";

interface RenamePageButtonProps {
  renamePageInput: ReactNode;
}

export const RenamePageButton: FC<RenamePageButtonProps> = ({
  renamePageInput: RenamePageInput,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Rename</button>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {RenamePageInput}
        </Modal>
      )}
    </>
  );
};
