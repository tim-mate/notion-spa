import { CSSProperties, FC, ReactNode } from "react";
import { Modal } from "antd";

import styles from "./Modal.module.scss";

interface ModalProps {
  onClose?: () => void;
  isOpen: boolean;
  children: ReactNode;
  style?: CSSProperties;
  keyboard?: boolean;
}

export const AppModal: FC<ModalProps> = ({
  onClose,
  children,
  isOpen,
  style,
  keyboard,
}) => {
  return (
    <>
      <Modal
        onCancel={onClose}
        open={isOpen}
        footer={null}
        closeIcon={null}
        mask={false}
        destroyOnClose={true}
        keyboard={keyboard}
        modalRender={() => (
          <div id={styles["content"]} className="ant-modal-content">
            {children}
          </div>
        )}
        style={{ ...style, margin: 0 }}
      />
    </>
  );
};
