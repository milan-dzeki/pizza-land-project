import React, { Component } from 'react';
import './sign-up.scss';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SignUp extends Component {
  state = {
    signUpForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Create Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false,
    checkInMethod: "signup",
    errorShow: false
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
    const formElements = {
      ...this.state.signUpForm,
      [inputIdentifier]: {
        ...this.state.signUpForm[inputIdentifier],
        value: event.target.value,
        valid: this.checkInputValidity(this.state.signUpForm[inputIdentifier].validation, event.target.value),
        touched: true
      }
    };

    let formValid = true;
    for(const inputIdentifier in formElements) {
      formValid = formElements[inputIdentifier].valid && formValid
    }

    this.setState({
      signUpForm: formElements,
      formIsValid: formValid
    });
  }
  switchCheckinMethodHandler = (stateCheckin) => {
    if(stateCheckin === "signup") {
      this.setState({checkInMethod: "login"})
    } else if(stateCheckin === "login") {
      this.setState({checkInMethod: "signup"})
    }
  }
  formSubmitHandler = (event, form) => {
    event.preventDefault();
    this.props.onAuthenticate(form.email.value, form.password.value, this.state.checkInMethod);

    if(this.props.orderStore.length === 0 && this.props.pizzaMakerPrice < 4.2) {
      this.props.history.push("/");
    }
    if(this.props.orderStore.length > 0) {
      this.props.history.push("/order");
    }
    if(this.props.orderStore.length === 0 && this.props.pizzaMakerPrice > 4.2) {
      this.props.history.push("/pizza-maker");
    }
  }
  render() {
    let formInputs = [];

    for(const key in this.state.signUpForm) {
      formInputs.push({
        id: key,
        details: this.state.signUpForm[key]
      });
    }

    let form = (
      <Form
        formCustomClassname="signup"
        formButtonText={this.state.checkInMethod === "signup" ? "sign up" : "log in"}
        submitBtnDisabled={this.state.formIsValid}
        submitForm={event => this.formSubmitHandler(event, this.state.signUpForm)}>
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
    );

    let page = (
      <React.Fragment>
        <h1 className="checkin__title">
          {this.state.checkInMethod === "signup" ? "sign up" : "log in"}
        </h1>
        <section className="checkin__content">
          <p className="checkin__content-info">
            In order to be able to order pizzas you need to create account on our page. Enter your contact info in order to proceed.
          </p>
          {form}
          <div className="checkin__switch">
            <p 
              className="checkin__switch-text"
              style={{
                display: this.state.checkInMethod === "signup" ? "block" : "none"
              }}>
              Already have an account?
            </p>
            <button 
              className="checkin__switch-btn"
              onClick={() => this.switchCheckinMethodHandler(this.state.checkInMethod)}>
              switch to {this.state.checkInMethod === "signup" ? "log in" : "sign up"}
            </button>
          </div>
        </section>
      </React.Fragment>
    );

    if(this.props.isAuthenticated) {
      page = (
        <React.Fragment>
          <p style={{fontSize: "3rem", textAlign: "center", padding: "5rem"}}>You are allready logged in</p>
          <button 
            onClick={this.props.onLogout}
            style={{
              fontSize: "2rem",
              width: "10rem",
              margin: "0 auto 2rem auto",
              backgroundColor: "#eee",
              textAlign: "center",
              padding: "0.5rem 1rem",
              display: "block",
              border: "none",
              outline: "none",
              cursor: "pointer"
            }}>log out</button>
        </React.Fragment>
      );
    }
    return page;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authenticate.token !== null,
    orderStore: state.pizzaTypes.orderStore,
    pizzaMakerPrice: state.pizzaMaker.currentPrice,
    error: state.authenticate.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticate: (email, password, checkInMethod) => dispatch(actions.authenticate(email, password, checkInMethod)),
    onLogout: () => dispatch(actions.authLogout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
