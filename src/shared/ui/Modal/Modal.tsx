import { FC, ReactNode } from "react";
import { Modal } from "antd";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const AppModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={null}
        closeIcon={null}
        mask={false}
        destroyOnClose={true}
        modalRender={() => (
          <div id={styles["content"]} className="ant-modal-content">
            {children}
          </div>
        )}
        style={{}}
      />
    </>
  );
};
