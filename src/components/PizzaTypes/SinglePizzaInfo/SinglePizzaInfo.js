import React from 'react';
import './single-pizza-info.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const singlePizzaInfo = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.hideInfo}/>
      <div className={props.show ? "pizza-info show-pizza-info" : "pizza-info"}>
        <div className="pizza-info__img">
          <img src={props.pizzaImg} alt= {props.pizzaName}/>
        </div>
        <div className="pizza-info__info">
          <p className="pizza-info__name">
            {props.pizzaName}
          </p>
          <p className="pizza-info__ing-title">
            ingredients:
          </p>
          <ul className="pizza-info__ingredients">
            {props.pizzaIngredients.map(ing => {
              return (
                <li key={ing}>
                  {ing}
                </li>
              );
            })}
          </ul>
          <button 
            className="pizza-info__btn"
            onClick={props.addPizzaToOrder}>
            order now
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default singlePizzaInfo;
