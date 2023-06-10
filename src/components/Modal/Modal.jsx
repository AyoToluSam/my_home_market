import { createPortal } from "react-dom";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return createPortal(
    <div>
      <div onClick={onClose}></div>
      <div>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
