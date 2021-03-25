import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import managementPeopleReducer from './store/reducers/managementPeople';
import navListReducer from './store/reducers/navList';
import employeesReducer from './store/reducers/employees';
import pizzaTypesReducer from './store/reducers/pizzaTypes';
import pizzaMakerReducer from './store/reducers/pizzaMaker';
import authenticateReducer from './store/reducers/authenticate';
import jobReducer from './store/reducers/job';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  managementPeople: managementPeopleReducer,
  navList: navListReducer,
  employees: employeesReducer,
  pizzaTypes: pizzaTypesReducer,
  pizzaMaker: pizzaMakerReducer,
  authenticate: authenticateReducer,
  job: jobReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
