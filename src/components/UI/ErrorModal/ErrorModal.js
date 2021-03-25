import React from 'react';
import './error-modal.scss';

const errorModal = props => {
  return (
    <div 
      className={props.errorShow ? "error-modal error-show" : "error-modal"}>
      <p className="error-modal__text">
        Sorry. Something went wrong.
      </p>
      <button className="error-modal__btn">
        OK
      </button>
    </div>
  )
}

export default errorModal;
