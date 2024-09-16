import { useNoScroll } from "@/hooks/useNoScroll";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Overlay, Content } from "./ModalStyles";

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  noScroll?: boolean;
  children: ReactNode;
};

const Modal = ({ open, onClose, noScroll = true, children }: ModalProps) => {
  useNoScroll({ watch: noScroll && open });

  if (!open) return null;

  const portalElement = document.getElementById("portal");
  if (!portalElement) {
    console.error("Portal Element not found.");
    return null;
  }

  return createPortal(
    <div>
      <Overlay onClick={onClose} />
      <Content>{children}</Content>
    </div>,
    portalElement
  );
};

export default Modal;
