import { FC, ReactNode } from "react";
import { Modal } from "antd";

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
        modalRender={() => children}
        style={{}}
      />
    </>
  );
};
