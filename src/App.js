import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import { Switch, Route, withRouter } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
import { connect } from 'react-redux';
import Home from './pages/Home/Home';
import * as actions from './store/actions/index';

// lazy loaded pages

// about pages
const AsyncHistory = asyncComponent(() => {
  return import('./pages/About/History/History');
});
const AsyncManagement = asyncComponent(() => {
  return import('./pages/About/Management/Management');
});

const AsyncManagementPerson = asyncComponent(() => {
  return import('./components/About/Management/RenderManagementPersons')
});

const AsyncEmployees = asyncComponent(() => {
  return import('./pages/About/Employees/Employees');
});

// pizza types page
const AsyncPizzaTypes = asyncComponent(() => {
  return import('./pages/PizzaTypes/PizzaTypes');
});

// order page
const AsyncOrder = asyncComponent(() => {
  return import('./pages/Order/Order');
});

// pizza maker
const AsyncPizzaMaker = asyncComponent(() => {
  return import('./pages/PizzaMaker/PizzaMaker');
});

// sign up
const AsyncSignUp = asyncComponent(() => {
  return import('./pages/SignUp/SignUp');
});

// your orders
const AsyncOrders = asyncComponent(() => {
  return import('./pages/YourOrders/YourOrders');
});

// job application
const AsyncJob = asyncComponent(() => {
  return import('./pages/Job/Job');
});

class App extends Component {
  componentDidMount() {
    this.props.onShouldAutoSignIn();
  }
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            <Route 
              path="/" 
              exact
              component={Home} />
            <Route
              path="/about/history"
              exact
              component={AsyncHistory} />
            <Route 
              path="/about/employees"
              component={AsyncEmployees} />
            <Route 
              path="/pizza-types"
              component={AsyncPizzaTypes} />
            <Route
              path="/order"
              component={AsyncOrder} />
            <Route
              path="/pizza-maker"
              component={AsyncPizzaMaker} />
            <Route
              path="/job"
              component={AsyncJob} />
            <Route
              path="/orders"
              component={AsyncOrders} />
            <Route
              path="/sign-up"
              component={AsyncSignUp} /> 
            <Route
              exact
              path="/about/management"
              component={AsyncManagement} />
            <AsyncManagementPerson exact />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShouldAutoSignIn: () => dispatch(actions.authCheckStatus())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
