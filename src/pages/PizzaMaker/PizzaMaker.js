import React, { Component } from 'react';
import './pizza-maker.scss';
import Pizza from '../../components/PizzaMaker/Pizza/Pizza';
import PizzaControls from '../../components/PizzaMaker/PizzaControls/PizzaControls';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';

class PizzaMaker extends Component {
  state = {
    modalOpen: false,
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
    if(this.props.ingredients.cheeses["mozzarella"] === false) {
      this.props.onManageCheeses("mozzarella");
    }
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
  orderPizzaHandler = () => {
    const orderData = {
      ingredients: {}
    };
    for(const cheese in this.props.ingredients.cheeses) {
      if(this.props.ingredients.cheeses[cheese]) {
        orderData.cheese = cheese;
      }
    }

    for(const ing in this.props.ingredients) {
      if(ing !== "cheeses" && ing !== "addition" && this.props.ingredients[ing]) {
        orderData.ingredients[ing] = "added"
      }
    }

    orderData.customerInfo = {
      name: this.state.orderForm.name.value,
      street: this.state.orderForm.street.value,
      phone: this.state.orderForm.phone.value
    }

    orderData.additions = this.props.ingredients.addition;

    orderData.totalPrice = this.props.currentPrice;

    this.props.onOrderPizza(orderData);
    this.closeModalHandler();
  }
  render() {
    let disabledBtns = {
      ...this.props.ingredients
    };
    for(const key in disabledBtns) {
      if(key !== "cheeses") {
        disabledBtns[key] = disabledBtns[key] ? true : false;
      }
    }
    const selectedIngredients = [];
    const cheeses = [];
    for(const ing in this.props.ingredients.cheeses) {
      cheeses.push({
        id: ing,
        name: ing,
        isOrdered: this.props.ingredients.cheeses[ing]
      })
    }
    for(const ing in this.props.ingredients) {
      if(ing !== "cheeses" && ing !== "addition" && this.props.ingredients[ing]) {
        selectedIngredients.push({
          id: ing,
          name: ing
        })
      }
    }
    const allIngredients = cheeses.concat(selectedIngredients);
    const addition = this.props.ingredients.addition;

    let formInputs = [];
    for(const key in this.state.orderForm) {
      formInputs.push({
        id: key,
        details: this.state.orderForm[key]
      });
    }

    return (
      <React.Fragment>
        <div 
          className="pizza-maker__order-finished"
          style={{
            display: this.props.orderSuccess ? "block" : "none"
          }}>
          Your order have been successfull! See you in no time!
        </div>
        <Modal
          modalOpen={this.state.modalOpen}
          closeModal={this.closeModalHandler}
          cancelled={this.closeModalHandler}
          continued={this.orderPizzaHandler}>
            <h2>
              Your ingredients:
            </h2>
            <ul style={{
                listStyle: "disc",
                textAlign: "left",
                padding: "2rem"
              }}>
              {allIngredients.map(ing => {
                return (
                  <li
                    key={ing.id}>
                    {ing.name}
                  </li>
                );
              })}
              <li>
                additions: {addition}
              </li>
            </ul>
            <p>Total Price: ${this.props.currentPrice.toFixed(2)}</p>
        </Modal>
        <h1 className="pizza-maker__title">
          pizza maker
        </h1>
        <section className="pizza-maker__content">
          <p className="pizza-maker__content-info">
            This is our pizza maker app. You can choose ingredients manually, according to your tastes, make up your prefered pizza model, order it, and we will make it for you for real. 
            Note that you can have only one type of cheese on your pizza.
            Additions are free.
          </p>
          <article className="pizza-maker__maker">
            <Pizza 
              ingredients={this.props.ingredients}/>
            <PizzaControls
              disabled={disabledBtns}
              currentPizzaPrice={this.props.currentPrice} 
              ingredientAdded={this.props.onAddIngredient}
              ingredientRemoved={this.props.onRemoveIngredient}
              cheeseAdded={this.props.onManageCheeses}
              additionAdded={this.props.onManageAdditions}/>
          </article>
          <div className="pizza-maker__form">
            <h4 className="pizza-maker__form-title">
              enter your order info
            </h4>
            <Form
              formCustomClassname="pizza-maker"
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
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.pizzaMaker.ingredients,
    currentPrice: state.pizzaMaker.currentPrice,
    orderSuccess: state.pizzaMaker.orderSuccess,
    isAuthenticated: state.authenticate.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (name) => dispatch(actions.addIngredient(name)),
    onRemoveIngredient: (name) => dispatch(actions.removeIngredient(name)),
    onManageCheeses: (cheese) => dispatch(actions.manageCheeses(cheese)),
    onManageAdditions: (addition) => dispatch(actions.manageAdditions(addition)),
    onOrderPizza: (orderData) => dispatch(actions.orderCustomPizza(orderData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMaker);
