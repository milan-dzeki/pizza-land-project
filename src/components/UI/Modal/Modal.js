import React from 'react';
import './modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
  return (
    <React.Fragment>
      <Backdrop 
        show={props.modalOpen}
        clicked={props.closeModal}/>
      <div className={props.modalOpen ? "modal modalOpen" : "modal"}>
        <div className="modal__content">
          {props.children}
        </div>
        <div className="modal__buttons">
          <button 
            className="modal__cancel"
            onClick={props.cancelled}>
            Cancel
          </button>
          <button 
            className="modal__continue"
            onClick={props.continued}>
            Continue
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default modal;
