import React from "react";
import "./Modal.css";

const Modal = ({ isOpen = false }) => {
  return isOpen ? (
    <div>
      <div className="container">
        <div className="modal">Modal</div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Modal;
