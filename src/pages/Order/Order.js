import React, { Component } from 'react';
import './order.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';

class Order extends Component {
  state = {
    modalOpen: false,
    currentPizzaSizes: [],
    currentPizzaPrices: [],
    totalPrice: 0,
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        validation: {
          required: true
        },
        touched: false,
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street"
        },
        validation: {
          required: true
        },
        touched: false,
        value: ""
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Phone Number"
        },
        validation: {
          required: true
        },
        touched: false,
        value: ""
      },
    },
    formIsValid: false
  }
  componentDidMount() {
    let initialPizzaPrices = this.props.orderStore.map(pizza => pizza.prices[0].price);

    let initialPizzaSizes = this.props.orderStore.map(pizza => pizza.prices[0].size)

    let currentTotalPrice = initialPizzaPrices.reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({
      currentPizzaPrices: initialPizzaPrices,
      currentPizzaSizes: initialPizzaSizes,
      totalPrice: currentTotalPrice
    });
  }
  pizzaSizeChangedHandler = (event, pizzaIndex) => {
    const pizzaPrices = [
      ...this.state.currentPizzaPrices
    ];
    const pizzaSizes = [
      ...this.state.currentPizzaSizes
    ]
    if(event.target.value === "32") {
      pizzaPrices[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[0].price;
      pizzaSizes[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[0].size;
    } else if(event.target.value === "42") {
      pizzaPrices[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[1].price;
      pizzaSizes[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[1].size;
    } else if(event.target.value === "50") {
      pizzaPrices[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[2].price;
      pizzaSizes[pizzaIndex] = this.props.orderStore[pizzaIndex].prices[2].size;
    }

    let newTotalPrice = pizzaPrices.reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({
      currentPizzaPrices: pizzaPrices,
      totalPrice: newTotalPrice
    })
  }
  removePizzaFromOrderStoreHandler = (pizza, pizzaIndex) => {
    this.props.onRemovePizzaFromOrderStore(pizza);

    const currentPizzaPricesCopy = [
      ...this.state.currentPizzaPrices
    ];
    
    let deletedPizzaPrice = currentPizzaPricesCopy.find((price, index) => index === pizzaIndex);

    const newCurrentPizzaPrices = currentPizzaPricesCopy.filter((pizza, index) => index !== pizzaIndex);
    this.setState(prevState => {
      return {
        totalPrice: prevState.totalPrice - deletedPizzaPrice,
        currentPizzaPrices: newCurrentPizzaPrices
      }
    })
  }
  checkInputValidity = (rules, value) => {
    let isValid = true;

    if(rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }
    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
      [inputIdentifier]: {
        ...this.state.orderForm[inputIdentifier],
        touched: true,
        value: event.target.value,
        valid: this.checkInputValidity(this.state.orderForm[inputIdentifier].validation, event.target.value)
      }
    };

    let formValid = true;
    for(const inputIdentifier in updatedOrderForm) {
      formValid = updatedOrderForm[inputIdentifier].valid && formValid;
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formValid
    })
  }
  formSubmitHandler = (event) => {
    event.preventDefault();
    if(this.props.isAuthenticated) {
      this.setState({modalOpen: true})
    } else {
      this.props.history.replace("/sign-up");
    }
  }
  closeModalHandler = () => {
    this.setState({modalOpen: false})
  }
  orderPizzasHandler = () => {
    const orderData = {
      pizzas: {}
    };
    this.props.orderStore.forEach((pizza, index) => {
      orderData.pizzas[pizza.name] = {
        name: pizza.name,
        size: this.state.currentPizzaSizes[index],
        price: this.state.currentPizzaPrices[index]
      }
    });

    orderData.customerInfo = {
      name: this.state.orderForm.name.value,
      street: this.state.orderForm.street.value,
      phone: this.state.orderForm.phone.value
    }

    orderData.totalPrice = this.state.totalPrice;

    this.props.onOrderPizzas(orderData);

    this.closeModalHandler();
    console.log(orderData);
  }
  render() {
    let redirect = null;
    if(this.props.orderStore.length === 0) {
      redirect = <Redirect to="/"/>
    }
    let pizzas = <p>No orders yet</p>;
    if(this.props.orderStore.length > 0) {
      pizzas = this.props.orderStore.map((pizza, pizzaIndex) => {
        return (
          <div key={pizza.id} className="pizza-display">
            <div 
              className="pizza-display__remove"
              onClick={() => this.removePizzaFromOrderStoreHandler(pizza, pizzaIndex)}
              >
              <FaTimes />
            </div>
            <div className="pizza-display__img">
              <img src={pizza.imageUrl} alt={pizza.name}/>
            </div>
            <p className="pizza-display__name">
              {pizza.name}
            </p>
            <div className="pizza-display__flex">
              <div className="pizza-display__info">
                <p className="pizza-display__ing-title">
                  ingredients:
                </p>
                <ul className="pizza-display__ingredients">
                  {pizza.ingredients.map((ing, index) => (
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
                <select name="size" id="size" onChange={(event) => this.pizzaSizeChangedHandler(event, pizzaIndex)}>
                  {pizza.prices.map(size => (
                    <option 
                      key={size.size}
                      value={size.size}>
                      {size.size}
                    </option>
                  ))}
                </select>
                <p className="pizza-display__price-text">
                  pizza price: $<span className="price">{this.state.currentPizzaPrices[pizzaIndex]}</span>
                </p>
              </div>
            </div>
          </div>
        );
      }
    )}

    let formInputs = [];
    for(const key in this.state.orderForm) {
      formInputs.push({
        id: key,
        details: this.state.orderForm[key]
      });
    }

    return (
      <React.Fragment>
        {redirect}
        <div 
          className="order__finished"
          style={{
            display: this.props.orderSuccess ? "block" : "none"
          }}>
          Your order have been successfull! See you in no time!
        </div>
        <Modal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModalHandler}
          cancelled={this.closeModalHandler}
          continued={this.orderPizzasHandler}
          >
          <h2 style={{
            marginBottom: "1.5rem"
          }}>You ordered:</h2>
          <ol style={{
            textAlign: "left",
            padding: "0 1rem"
          }}>
            {this.props.orderStore.map((order, index) => (
              <li
                key={order.id}
                style={{marginBottom: "1rem"}}
                >
                <p>
                  <span style={{fontWeight: "bold"}}>Pizza name: </span>
                  <span style={{textTransform: "capitalize"}}>{order.name}</span>
                </p>
                <p>
                  <span style={{fontWeight: "bold"}}>size: </span>
                  <span>{this.state.currentPizzaSizes[index]}cm</span>
                </p>
                <p>
                  <span style={{fontWeight: "bold"}}>price: </span>
                  <span>
                    ${this.state.currentPizzaPrices[index]}
                  </span>
                </p>
              </li>
            ))}
          </ol>
          <p>Total price: ${this.state.totalPrice}</p>
        </Modal>
        <h1 className="order__title">
          order your pizza
        </h1>
        <section className="order__content">
          <h3 className="order__pizza-title">
            ready to order:
          </h3>
          <article className="order__pizza">
            <div className="order__pizza-pizza">
              {pizzas}
            </div>
            <p className="order__total-price">
              Total Price: $ 
              <span>{this.state.totalPrice}</span>
            </p>
            <div className="order__more">
              <Link to="/pizza-types">
                order more pizzas
              </Link>
            </div>
            <div className="order__form">
              <h4 className="order__form-title">
                enter your order info
              </h4>
              <Form
                formCustomClassname="order"
                formButtonText={this.props.isAuthenticated ? "order now" : "sign up to order"}
                submitBtnDisabled={this.state.formIsValid}
                submitForm={this.formSubmitHandler}>
                {formInputs.map(formElement => {
                  return <Input
                    key={formElement.id}
                    elementType={formElement.details.elementType}
                    elementConfig={formElement.details.elementConfig}
                    value={formElement.details.value}
                    touched={formElement.details.touched}
                    validationRequired={formElement.details.validation}
                    valid={formElement.details.valid}
                    inputChanged={event => this.inputChangedHandler(event, formElement.id)} />
                })}
              </Form>
            </div>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaTypes: state.pizzaTypes.pizzaTypes,
    orderStore: state.pizzaTypes.orderStore,
    isAuthenticated: state.authenticate.token !== null,
    orderSuccess: state.pizzaTypes.orderSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemovePizzaFromOrderStore: (pizza) => dispatch(actions.removePizzaFromOrderStore(pizza)),
    onOrderPizzas: (orderData) => dispatch(actions.orderPizzas(orderData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
