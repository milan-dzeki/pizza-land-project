import React from 'react';

export const filterPizzaTypes = (pizzaState, pizzaType, showPizzaInfo) => {
  let filteredPizzas = pizzaState.filter(pizza => pizza[pizzaType]);

  if(filteredPizzas.length === 0) {
    filteredPizzas = pizzaState;
  }
  let pizzaDom = filteredPizzas.map(pizza => {
    return (
      <li
        key={pizza.id}
        className="single-pizza">
          <div className="single-pizza__img">
            <img src={pizza.imageUrl} alt={pizza.id} />
          </div>
          <div className="single-pizza__info">
            <p className="single-pizza__name">
              {pizza.name}
            </p>
            <button className="single-pizza__btn"
            onClick={() => showPizzaInfo(pizza)}>
              expand
            </button>
          </div>
      </li>
    );
  })

  return pizzaDom;
}