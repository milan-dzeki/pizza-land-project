import React from 'react';
import './employees-slider-element.scss';

const employeesSliderElement = props => {
  return (
    <div className={`employee-slider-el ${props.employeeSlideClassname} ${props.slideElPosition}`}>
      <div className="employee-slider-el__img">
        <img src={props.employeeImg} alt={props.employeeName}/>
      </div>
      <div className="employee-slider-el__info">
        <p className="employee-slider-el__name">
          {props.employeeName}
        </p>
        <p className="employee-slider-el__bio">
          {props.employeeBio}
        </p>
      </div>
    </div>
  )
}

export default employeesSliderElement
