import React from 'react';
import './pizza-types-slider-element.scss';

const pizzaTypesSliderElement = props => {
  return (
    <div className={`home-slider-el ${props.slideElPosition}`}>
      <div className="home-slider-el__img">
        <img src={props.pizzaImg} alt={props.pizzaName} />
      </div>
      <div className="home-slider-el__info">
        <h4 className="home-slider-el__name">
          {props.pizzaName}
        </h4>
        <button 
          className="home-slider-el__btn"
          onClick={props.addPizzaToOrders}>
          order now
        </button>
      </div>
    </div>
  );
}

export default pizzaTypesSliderElement;
