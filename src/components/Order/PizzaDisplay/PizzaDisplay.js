import React, { Component } from 'react';
import './pizza-display.scss';

class pizzaDisplay extends Component {
  state = {
    pizzaPrice: this.props.pizzaSizes[0].price
  }
  setPizzaPrice = (value) => {
    if(value === "32") {
      this.setState({pizzaPrice: this.props.pizzaSizes[0].price})
    }
    if(value === "42") {
      this.setState({pizzaPrice: this.props.pizzaSizes[1].price})
    }
    if(value === "50") {
      this.setState({pizzaPrice: this.props.pizzaSizes[2].price})
    }
  }
  render() {
    return (
      <div className="pizza-display">
        <div className="pizza-display__img">
          <img src={this.props.pizzaImg} alt={this.props.pizzaName}/>
        </div>
        <p className="pizza-display__name">
          {this.props.pizzaName}
        </p>
        <div className="pizza-display__flex">
          <div className="pizza-display__info">
            <p className="pizza-display__ing-title">
              ingredients:
            </p>
            <ul className="pizza-display__ingredients">
              {this.props.pizzaIngredients.map((ing, index) => (
              <li
                key={index}
                className="pizza-display__ing">
                {ing}
              </li>
              ))}
            </ul>
          </div>
          <div className="pizza-display__pricing">
            <label htmlFor="size">
              pizza size:
            </label>
            <select name="size" id="size" onChange={(event) => {
              this.setPizzaPrice(event.target.value)
            }}>
              {this.props.pizzaSizes.map(size => (
                <option 
                  key={size.size}
                  value={size.size}>
                  {size.size}
                </option>
              ))}
            </select>
            <p className="pizza-display__price-text">
              pizza price: $<span className="price">{this.state.pizzaPrice}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default pizzaDisplay;
