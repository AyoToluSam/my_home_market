import { createPortal } from "react-dom";
import { Overlay, Content } from "./ModalStyles";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return createPortal(
    <div>
      <Overlay onClick={onClose} />
      <Content>{children}</Content>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
