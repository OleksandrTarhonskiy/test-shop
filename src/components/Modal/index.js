import React from 'react';

import './modal.scss';
import close from 'assets/images/x.svg';

const Modal = ({ open, onToggle, children }) => {

  if (!open) return null;

  return (
    <div className="Modal__wrapper">
      <div className="Modal__content">
        <div 
          className="close-button"
          onClick={() => onToggle(false)}
        >
          <img src={close} alt="x" />
        </div>
          {children}
      </div>
    </div>
  );
}

export default Modal;