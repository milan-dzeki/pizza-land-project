import React from 'react';
import './pizza-ingredient.scss';

const pizzaIngredient = props => {
  let ingredient = null;

  switch(props.ingType) {
    case("mozzarella"):
      ingredient = <div className="mozzarella"></div>;
      break;
    case("havarti"):
      ingredient = <div className="havarti"></div>;
      break;
    case("goatCheese"):
      ingredient = <div className="goat-cheese"></div>;
      break;
    case("salmon"):
      ingredient = (
        <div className="salmon">
          <div className="salmon__content">
            <div className="salmon--1"></div>
            <div className="salmon--2"></div>
            <div className="salmon--3"></div>
            <div className="salmon--4"></div>
            <div className="salmon--5"></div>
            <div className="salmon--6"></div>
          </div>
        </div>
      );
      break;
    case("bacon"):
      ingredient = (
        <div className="bacon">
          <div className="bacon__content">
            <div className="bacon--1"></div>
            <div className="bacon--2"></div>
            <div className="bacon--3"></div>
            <div className="bacon--4"></div>
            <div className="bacon--5"></div>
            <div className="bacon--6"></div>
            <div className="bacon--7"></div>
            <div className="bacon--8"></div>
          </div>
        </div>
      );
      break;
    case("mushrooms"):
      ingredient = (
        <div className="shrooms">
          <div className="shrooms__content">
            <div className="shrooms--1"></div>
            <div className="shrooms--2"></div>
            <div className="shrooms--3"></div>
            <div className="shrooms--4"></div>
          </div>
        </div>
      );
      break;
    case("olives"):
      ingredient = (
        <div className="olives">
          <div className="olives__content">
            <div className="olives--1"></div>
            <div className="olives--2"></div>
            <div className="olives--3"></div>
            <div className="olives--4"></div>
            <div className="olives--5"></div>
            <div className="olives--6"></div>
            <div className="olives--7"></div>
            <div className="olives--8"></div>
            <div className="olives--9"></div>
            <div className="olives--10"></div>
          </div>
        </div>
      );
      break;
    default:
      ingredient = null;
  }
  return ingredient;
}

export default pizzaIngredient;
