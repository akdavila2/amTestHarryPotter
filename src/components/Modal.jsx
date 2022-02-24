import React, { useState, useEffect } from "react";

import { createPortal } from "react-dom";
import { ModalContent } from "./ModalContent";

const Modal = ({ visible, onClose }) => {
  console.log("modal", visible);

  const [container, setContainer] = useState();
  const getNode = () => {
    const target = document.getElementById("modal");
    setContainer(target);
  };
  useEffect(getNode, []);
  if (!container) return null;
  return createPortal(<ModalContent onClose={onClose} />, container);
};

export default Modal;
