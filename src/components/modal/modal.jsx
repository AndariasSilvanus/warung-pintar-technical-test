import React from "react";
import T from "prop-types";
import MaterialUIModal from "@material-ui/core/Modal";

const propTypes = {
  isOpen: T.bool,
  handleClose: T.func,
};

export const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <MaterialUIModal open={isOpen} onClose={handleClose}>
      {children}
    </MaterialUIModal>
  );
};

Modal.propTypes = propTypes;

export default Modal;
