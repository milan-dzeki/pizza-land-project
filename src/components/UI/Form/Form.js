import React from 'react';
import './form.scss';

const form = props => {
  return (
    <form 
      className={`form form__${props.formCustomClassname}`}
      onSubmit={props.submitForm}>
      {props.children}
      <button 
        className="form__button"
        disabled={!props.submitBtnDisabled}>
        {props.formButtonText}
      </button>
    </form>
  )
}

export default form
