import {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactNode,
  useRef,
  useState,
} from "react";

import { calculateModalPosition } from "../../lib/calculateModalPosition";
import Rename from "@assets/icons/rename.svg";
import { Modal } from "@/shared/ui";

interface RenamePageButtonProps {
  inputSlot: ReactNode;
  onClick?: () => void;
  onFinish?: () => void;
}

export const RenamePageButton: FC<RenamePageButtonProps> = ({
  inputSlot: InputSlot,
  onClick,
  onFinish,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const position = useRef<CSSProperties>();

  const handleClick: MouseEventHandler = (e) => {
    setIsModalOpen(true);
    position.current = calculateModalPosition(e.clientY);

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick}>
        <Rename /> <p>Rename</p>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={onFinish}
        style={{
          ...position.current,
          maxWidth: "346px",
          padding: "4px 8px",
          borderRadius: "6px",
          backgroundColor: "#ffffff",
          boxShadow:
            "rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px",
        }}
      >
        {InputSlot}
      </Modal>
    </>
  );
};
