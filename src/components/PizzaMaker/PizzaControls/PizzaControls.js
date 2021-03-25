import React from 'react';
import './pizza-controls.scss';

const pizzaControls = props => {
  return (
    <div className="pizza-controls">
      <p className="pizza-controls__price">
        Current price: $
        <span>{props.currentPizzaPrice.toFixed(2)}</span>
      </p>
      <div className="pizza-controls__buttons">
        <div className="pizza-controls__cheeses pizza-controls__control">
          <label 
            htmlFor="cheeses"
            className="pizza-controls__label pizza-controls__label--cheeses">cheeses</label>
          <select name="cheeses" onChange={event => props.cheeseAdded(event.target.value)}>
            <option
              value="mozzarella">
              mozzarella
            </option>
            <option 
              value="havarti">
              havarti
            </option>
            <option value="goatCheese">
              goat
            </option>
          </select>
        </div>
        <div className="pizza-controls__control pizza-controls__salmon">
          <p className="pizza-controls__label pizza-controls__label--salmon">
            salmon
          </p>
          <button 
            className="pizza-controls__btn btn-remove"
            disabled={!props.disabled["salmon"]}
            onClick={() => props.ingredientRemoved("salmon")}>
            remove
          </button>
          <button 
            className="pizza-controls__btn btn-add"
            disabled={props.disabled["salmon"]}
            onClick={() => props.ingredientAdded("salmon")}>
            add
          </button>
        </div>
        <div className="pizza-controls__control pizza-controls__bacon">
          <p className="pizza-controls__label pizza-controls__label--bacon">
            bacon
          </p>
          <button 
            className="pizza-controls__btn btn-remove"
            disabled={!props.disabled["bacon"]}
            onClick={() => props.ingredientRemoved("bacon")}>
            remove
          </button>
          <button 
            className="pizza-controls__btn btn-add"
            disabled={props.disabled["bacon"]}
            onClick={() => props.ingredientAdded("bacon")}>
            add
          </button>
        </div>
        <div className="pizza-controls__control pizza-controls__mushrooms">
          <p className="pizza-controls__label pizza-controls__label--mushrooms">
            mushrooms
          </p>
          <button 
            className="pizza-controls__btn btn-remove"
            disabled={!props.disabled["mushrooms"]}
            onClick={() => props.ingredientRemoved("mushrooms")}>
            remove
          </button>
          <button 
            className="pizza-controls__btn btn-add"
            disabled={props.disabled["mushrooms"]}
            onClick={() => props.ingredientAdded("mushrooms")}>
            add
          </button>
        </div>
        <div className="pizza-controls__control pizza-controls__olives">
          <p className="pizza-controls__label pizza-controls__label--olives">
            olives
          </p>
          <button 
            className="pizza-controls__btn btn-remove"
            disabled={!props.disabled["olives"]}
            onClick={() => props.ingredientRemoved("olives")}>
            remove
          </button>
          <button 
            className="pizza-controls__btn btn-add"
            disabled={props.disabled["olives"]}
            onClick={() => props.ingredientAdded("olives")}>
            add
          </button>
        </div>
        <div className="pizza-controls__control pizza-controls__addition">
          <label 
            htmlFor="addition"
            className="pizza-controls__label pizza-controls__label--cheeses">additions</label>
          <select 
            name="addition"
            onChange={event => props.additionAdded(event.target.value)}>
            <option 
              value="">
            </option>
            <option 
              value="ketchup">
              ketchup
            </option>
            <option value="mayo">
              mayo
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default pizzaControls
