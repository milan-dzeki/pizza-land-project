import * as actionTypes from './actionTypes';
import axios from 'axios';

// add ingredient
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

// remove ingredient
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const manageCheeses = (cheese) => {
  return {
    type: actionTypes.MANAGE_CHEESES,
    cheese
  };
};

export const manageAdditions = (addition) => {
  return {
    type: actionTypes.MANAGE_ADDITIONS,
    addition
  };
};

// order pizza
const orderCustomSuccess = () => {
  return {
    type: actionTypes.ORDER_CUSTOM_SUCCESS
  };
};

const orderCustomSuccessFinish = () => {
  return {
    type: actionTypes.ORDER_CUSTOM_SUCCESS_FINISH
  };
};

const orderCustomFail = () => {
  return {
    type: actionTypes.ORDER_CUSTOM_FAIL
  };
};

export const orderCustomPizza = (orderData) => {
  return dispatch => {
    axios.post("https://pizza-land-babe6-default-rtdb.firebaseio.com//pizzaMaker.json", orderData)
      .then(response => {
        dispatch(orderCustomSuccess());
        setTimeout(() => {
          dispatch(orderCustomSuccessFinish());
        }, 2000);
      })
      .catch(error => {
        dispatch(orderCustomFail())
      })
  };
};

// fetch pizza maker orders
const fetchPizzaMakerOrdersSuccess = (orderData) => {
  return {
    type: actionTypes.FETCH_PIZZA_MAKER_ORDERS_SUCCESS,
    orderData
  };
};

const fetchPizzaMakerordersFail = () => {
  return {
    type: actionTypes.FETCH_PIZZA_MAKER_ORDERS_FAIL
  };
};

export const fetchPizzaMakerOrders = () => {
  return dispatch => {
    axios.get("https://pizza-land-babe6-default-rtdb.firebaseio.com//pizzaMaker.json")
      .then(response => {
        dispatch(fetchPizzaMakerOrdersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPizzaMakerordersFail())
      })
  };
};