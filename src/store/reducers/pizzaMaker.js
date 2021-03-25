import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
  mozzarella: 2,
  havarti: 2.5,
  goatCheese: 3,
  salmon: 0.6,
  bacon: 0.7,
  mushrooms: 1.2, 
  olives: 0.2
};

const initialState = {
  ingredients: {
    cheeses: {
      mozzarella: false,
      havarti: false,
      goatCheese: false
    },
    salmon: false,
    bacon: false,
    mushrooms: false,
    olives: false,
    addition: "none"
  },
  currentPrice: 2,
  orderSuccess: false,
  error: null,
  fetchedOrders: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: true
        },
        currentPrice: state.currentPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: false
        },
        currentPrice: state.currentPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.MANAGE_CHEESES:
      let updatedCheeses = {
        ...state.ingredients.cheeses
      };
      let cheesePriceAddition;
      let previouseCheesePrice = 0;

      for(const cheese in updatedCheeses) {
        if(cheese === action.cheese) {
          updatedCheeses[cheese] = true;
        } else if(cheese !== action.cheese && updatedCheeses[cheese] === true) {
          updatedCheeses[cheese] = false;
          previouseCheesePrice = INGREDIENT_PRICES[cheese];
        }
        cheesePriceAddition = INGREDIENT_PRICES[action.cheese] - previouseCheesePrice;
      }
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          cheeses: updatedCheeses
        },
        currentPrice: state.currentPrice + cheesePriceAddition
      };
    case actionTypes.MANAGE_ADDITIONS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          addition: action.addition
        }
      };
    case actionTypes.ORDER_CUSTOM_SUCCESS:
      return {
        ...state,
        loading: false,
        orderSuccess: true
      };
    case actionTypes.ORDER_CUSTOM_FAIL:
      return {
        ...state, 
        loading: false
      };
    case actionTypes.ORDER_CUSTOM_SUCCESS_FINISH:
      return {
        ...state,
        orderSuccess: false
      };
    case actionTypes.FETCH_PIZZA_MAKER_ORDERS_SUCCESS:
      return {
        ...state,
        fetchedOrders: action.orderData
      };
    default:
      return state;
  }
};

export default reducer;