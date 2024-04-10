import {
  CSSProperties,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  cloneElement,
  useState,
} from "react";

import { Modal } from "@/shared/ui";
import styles from "./ShowActionsButton.module.scss";
import { calculateModalStyle } from "../../lib/calculateModalStyle";

interface ActionsPanelProps {
  onAction: () => void;
  onRenameAction: () => void;
}

interface ShowActionsButtonProps {
  actionsPanel: ReactElement<ActionsPanelProps>;
  location: "sidebar" | "topbar";
  children: ReactNode;
}

export const ShowActionsButton: FC<ShowActionsButtonProps> = ({
  actionsPanel,
  children,
  location,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState<CSSProperties>({
    maxWidth: location === "sidebar" ? "265px" : "236px",
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const style = calculateModalStyle(location, e.clientX, e.clientY);

    setModalStyle(style);
    setIsModalOpen(true);
  };

  const handleAction = () => {
    setIsModalOpen(false);
  };

  const handleRenameAction = () => {
    setModalStyle({ ...modalStyle, opacity: 0 });
  };

  const ActionsPanel = cloneElement(actionsPanel, {
    onAction: handleAction,
    onRenameAction: handleRenameAction,
  });

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={styles["pages-list__button"]}
      >
        {children}
      </button>

      <Modal
        style={modalStyle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {ActionsPanel}
      </Modal>
    </>
  );
};
