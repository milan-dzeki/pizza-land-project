import React from 'react';
import './pizza.scss';
import PizzaIngredient from './PizzaIngredient/PizzaIngredient';

const pizza = props => {
  let passedIngredients = [];
  for(const ing in props.ingredients) {
    if(ing !== "cheeses" && ing !== "addition" && props.ingredients[ing]) {
      passedIngredients.push(ing);
    }
  }
  let chosenCheese;
  for(const cheese in props.ingredients.cheeses) {
    if(props.ingredients.cheeses[cheese]) {
      chosenCheese = <PizzaIngredient ingType={cheese} />
    }
  }
  return (
    <div className="pizza-build">
      <div className="pizza-build__crust">
        {chosenCheese}
        {passedIngredients.map(ing => {
          return <PizzaIngredient
            key={ing} 
            ingType={ing} />
        })}
      </div>
    </div>
  );
}

export default pizza;
