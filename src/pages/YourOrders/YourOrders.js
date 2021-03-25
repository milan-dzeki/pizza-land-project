import React, { Component } from 'react';
import './your-orders.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';

class YourOrders extends Component {
  componentDidMount() {
    this.props.onFetchPizzaTypesOrders();
    this.props.onFetchPizzaMakerOrders();
  }
  render() {
    // make array of pizza types fetched orders
    const pizzaTypesOrders = [];
    for(let key in this.props.fetchedTypesOrders) {
      pizzaTypesOrders.push({
        id: key,
        address: this.props.fetchedTypesOrders[key].customerInfo.street,
        totalPrice: this.props.fetchedTypesOrders[key].totalPrice,
        pizzas: Object.keys(this.props.fetchedTypesOrders[key].pizzas)
          .map(pizza => {
            return {
              name: this.props.fetchedTypesOrders[key].pizzas[pizza].name,
              size: this.props.fetchedTypesOrders[key].pizzas[pizza].size,
              price: this.props.fetchedTypesOrders[key].pizzas[pizza].price
            }
          })
      })
    }

    // make array of pizza maker fetched orders
    const pizzaMakerOrders = [];
    for(const key in this.props.fetchedMakerOrders) {
      pizzaMakerOrders.push({
        id: key,
        cheese: this.props.fetchedMakerOrders[key].cheese,
        additions: this.props.fetchedMakerOrders[key].additions,
        ingredients: Object.keys(this.props.fetchedMakerOrders[key].ingredients)
          .map(ing => ing),
        address: this.props.fetchedMakerOrders[key].customerInfo.street,
        price: this.props.fetchedMakerOrders[key].totalPrice
      });
    }

    let allOrders = (
      <React.Fragment>
        <h1 className="orders__title">
          your orders
        </h1>
        <section className="orders__content">
          <p className="orders__content-info">
            You can find all of your previous orders here.
          </p>
          <article className="orders__orders">
            <div className="orders__orders-pizza-types">
              <h4>Regular orders</h4>
              <ul className="orders__orders-pizza-types__list">
                {pizzaTypesOrders.map(order => {
                  return (
                    <li
                      key={order.id}
                      className="orders__orders-pizza-types__order">
                      <p className="orders__orders-pizza-types__text">
                        Your pizzas
                      </p>
                      <ul className="orders__orders-pizza-types__pizzas">
                        {order.pizzas.map(pizza => (
                          <li
                            key={order.id + pizza.name}
                            className="single-order-pizza">
                            <p className="single-order-pizza__name">
                              {pizza.name}
                            </p>
                            <p className="single-order-pizza__size">
                              size: {pizza.size}cm
                            </p>
                            <p className="single-order-pizza__price">
                              price: ${pizza.price}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <p className="orders__orders-pizza-types__address">
                        delivery street: {order.address}
                      </p>
                      <p className="orders__orders-pizza-types__price">
                        total price: ${order.totalPrice}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="orders__orders-pizza-maker">
              <h4>Custom pizza orders</h4>
              <ul className="orders__orders-pizza-maker__list">
                {pizzaMakerOrders.map(order => (
                  <li
                    key={order.id}
                    className="orders__orders-pizza-maker__order">
                    <p className="pizza-maker__order-name">
                      You custom pizza with following ingredients:
                    </p>
                    <ul className="pizza-maker__order-ings">
                      <li className="pizza-maker__order-ing">
                        {order.cheese}
                      </li>
                      {order.ingredients.map(ing => (
                        <li
                          key={ing}
                          className="pizza-maker__order-ing">
                          {ing}
                        </li>
                      ))}
                    </ul>
                    <p className="pizza-maker__order-address">
                      delivery street: {order.address}
                    </p>
                    <p className="pizza-maker__order-price">
                      price: ${order.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </React.Fragment>
    );

    if(!this.props.isAuthenticated) {
      allOrders = (
        <React.Fragment>
          <p style={{fontSize: "3rem", textAlign: "center", padding: "5rem"}}>LOG IN TO SEE ALL ORDERS FROM THIS ADDRESS</p>
          <Link 
            to="sign-up"
            style={{
              fontSize: "2rem",
              width: "10rem",
              margin: "0 auto 2rem auto",
              backgroundColor: "#eee",
              textAlign: "center",
              padding: "0.5rem 1rem"
            }}>log in</Link>
        </React.Fragment>
      );
    }
    return allOrders;
  }
}

const mapStateToProps = state => {
  return {
    fetchedTypesOrders: state.pizzaTypes.fetchedOrders,
    fetchedMakerOrders: state.pizzaMaker.fetchedOrders,
    isAuthenticated: state.authenticate.token !==null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPizzaTypesOrders: () => dispatch(actions.fetchPizzaTypesOrders()),
    onFetchPizzaMakerOrders: () => dispatch(actions.fetchPizzaMakerOrders())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourOrders);
