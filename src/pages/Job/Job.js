import React, { Component } from 'react';
import './job.scss';
import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Job extends Component {
  state = {
    jobForm: {
      jobType: {
        elementType: "select",
        label: "Select job",
        elementConfig: {
          options: [
            {
              value: "pizza maker",
              displayedValue: "Pizza Maker"
            },
            {
              value: "delivery guy",
              displayedValue: "Delivery Guy"
            },
            {
              value: "seller",
              displayedValue: "Seller"
            }
          ]
        },
        value: "pizza maker",
        validation: {},
        valid: true
      },
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      gender: {
        elementType: "select",
        label: "Gender",
        elementConfig: {
          options: [
            {
              value: "male",
              displayedValue: "Male"
            },
            {
              value: "female",
              displayedValue: "Female"
            }
          ]
        },
        value: "male",
        validation: {},
        valid: true
      },
      birthDate: {
        label: "Birthday",
        elementType: "input",
        elementConfig: {
          type: "date",
          placeholder: "First Name"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Address"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      phone: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Your Phone"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      highSchool: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "High School"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      university: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "University"
        },
        value: "",
        validation: {
          required: true
        },
        touched: false, 
        valid: false
      },
      driverLicence: {
        label: "Driving Licence",
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "none",
              displayedValue: "None"
            },
            {
              value: "A",
              displayedValue: "A category"
            },
            {
              value: "B",
              displayedValue: "B category"
            },
            {
              value: "C",
              displayedValue: "C category"
            },
            {
              value: "D",
              displayedValue: "D category"
            },
            {
              value: "A and B",
              displayedValue: "A and B"
            },
            {
              value: "A and C",
              displayedValue: "A and C"
            },
            {
              value: "A and D",
              displayedValue: "A and D"
            },
            {
              value: "B and C",
              displayedValue: "B and C"
            },
            {
              value: "B and D",
              displayedValue: "B and D"
            },
            {
              value: "C and D",
              displayedValue: "C and D"
            },
          ]
        },
        validation: {},
        valid: true
      },
      additionalInfo: {
        elementType: "textarea",
        elementConfig: {
          placeholder: "Additional info about you"
        },
        value: "",
        validation: {},
        valid: true
      }
    },
    formIsValid: false
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
      ...this.state.jobForm,
      [inputIdentifier]: {
        ...this.state.jobForm[inputIdentifier],
        value: event.target.value,
        valid: this.checkInputValidity(this.state.jobForm[inputIdentifier].validation, event.target.value),
        touched: true
      }
    };

    let formValid = true;
    for(const inputIdentifier in formElements) {
      formValid = formElements[inputIdentifier].valid && formValid
    }

    this.setState({
      jobForm: formElements,
      formIsValid: formValid
    });
  }
  formSubmitHandler = (event) => {
    event.preventDefault();
    
    const info = {};

    for(const key in this.state.jobForm) {
      info[key] = this.state.jobForm[key].value;
    }

    this.props.onJobApply(info);
  }
  render() {
    const formInputs = [];
    for(const key in this.state.jobForm) {
      formInputs.push({
        id: key,
        details: this.state.jobForm[key]
      })
    }

    const form = formInputs.map(formElement => (
      <Input
        key={formElement.id}
        label={formElement.details.label}
        elementType={formElement.details.elementType}
        elementConfig={formElement.details.elementConfig}
        value={formElement.details.value}
        touched={formElement.details.touched}
        validationRequired={formElement.details.validation}
        valid={formElement.details.valid}
        inputChanged={(event) => this.inputChangedHandler(event, formElement.id)} />
    ))
    return (
      <React.Fragment>
        <h1 className="job__title">
          apply for a job
        </h1>
        <section className="job__content">
          <p className="job__content-info">
            We currently need pizza makers, delivery guys and pizza sellers. Fill the fields and send us your application. We will go through it and give you a call to notify you whether the resime satisfy our criteria. Wish you luck!
          </p>
          <Form
            formCustomClassname="job"
            submitBtnDisabled={this.state.formIsValid}
            formButtonText="send"
            submitForm={this.formSubmitHandler}>
            {form}
          </Form>
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onJobApply: (info) => dispatch(actions.jobApply(info))
  };
};

export default connect(null, mapDispatchToProps)(Job);
