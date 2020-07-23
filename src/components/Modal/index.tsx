import React from "react";
import { createPortal } from "react-dom";

import { Overlay } from "./styles";

const modalRoot = document.getElementById("modal-root");

interface Props {
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ children, isOpen }) => {
  if (!modalRoot || !isOpen) {
    return null;
  }

  return createPortal(<Overlay>{children}</Overlay>, modalRoot);
};

export default Modal;
