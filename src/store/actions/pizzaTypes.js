import axios from 'axios';
import * as actionTypes from './actionTypes';

export const changePizzaType = (filterType) => {
  return {
    type: actionTypes.CHANGE_PIZZA_TYPE,
    filterType
  };
};

export const setPizzaTypeToAll = () => {
  return {
    type: actionTypes.SET_PIZZA_TYPE_TO_ALL
  };
};

export const addPizzaToOrderStore = (pizza) => {
  return {
    type: actionTypes.ADD_PIZZA_TO_ORDER_STORE,
    pizza
  };
};

export const removePizzaFromOrderStore = (pizza) => {
  return {
    type: actionTypes.REMOVE_PIZZA_FROM_ORDER_STORE,
    pizza
  };
};

// order pizzas

const orderPizzasSuccess = () => {
  return {
    type: actionTypes.ORDER_PIZZAS_SUCCESS
  };
};

const orderPizzasSuccessFinish = () => {
  return {
    type: actionTypes.ORDER_PIZZAS_SUCCESS_FINISH
  };
};

const orderPizzasFail = () => {
  return {
    type: actionTypes.ORDER_PIZZAS_FAIL
  };
};

export const orderPizzas = (orderData) => {
  return dispatch => {
    axios.post("https://pizza-land-babe6-default-rtdb.firebaseio.com/pizzaTypesOrders.json", orderData)
      .then(response => {
        dispatch(orderPizzasSuccess());
        console.log(response.data);
        setTimeout(() => {
          dispatch(orderPizzasSuccessFinish())
        }, 2000);
      })
      .catch(error => {
        dispatch(orderPizzasFail());
        console.log(error);
      })
  };
};

// fetch orders
const fetchPizzaTypesOrdersSuccess = (orderData) => {
  return {
    type: actionTypes.FETCH_PIZZA_TYPES_ORDERS_SUCCESS,
    orderData
  };
};

const fetchPizzaTypesOrdersFail = () => {
  return {
    type: actionTypes.FETCH_PIZZA_TYPES_ORDERS_FAIL
  };
};

export const fetchPizzaTypesOrders = () => {
  return dispatch => {
    axios.get("https://pizza-land-babe6-default-rtdb.firebaseio.com/pizzaTypesOrders.json")
      .then(response => {
        dispatch(fetchPizzaTypesOrdersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPizzaTypesOrdersFail())
      })
  };
};