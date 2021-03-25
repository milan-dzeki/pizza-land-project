import React from 'react';
import './slider.scss';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Backdrop from '../Backdrop/Backdrop';

const Slider = props => {
  return (
    <React.Fragment>
      <Backdrop 
        show={props.sliderShow}
        clicked={props.sliderClosed}/>
          <div className={props.sliderShow ? "slider slider-show" : "slider"}>
            <div className="slider__container">
              <div 
                className="slider__close"
                onClick={props.sliderClosed}>
                <FaTimes />
              </div>
              <div 
                className="slider__btn slider__btn--left"
                onClick={props.prevSlide}>
                <FaChevronLeft />
              </div>
              <div 
                className="slider__btn slider__btn--right"
                onClick={props.nextSlide}>
                <FaChevronRight />
              </div>
              <h3 className="slider__heading">
                {props.sliderHeading}
              </h3>
              <div className="slider__content">
                {props.children}
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}

export default Slider;
