import * as actionTypes from '../actions/actionTypes';

// pizza images
import breakfastPizzaImg from '../../images/pizzaTypesReal/meat-breakfast.jpg';
import chichagoDeepDishPizzaImg from '../../images/pizzaTypesReal/meat-chicago-deep-dish.jpg';
import californianPizzaImg from '../../images/pizzaTypesReal/meat-shrooms-californian.jpg';
import stLouisPizzaImg from '../../images/pizzaTypesReal/meat-shrooms-st-loiuse.jpg';
import caramelizedOnionPizzaImg from '../../images/pizzaTypesReal/mushroom-caramelized-onion.jpg';
import creamyMushroomGalettePizzaImg from '../../images/pizzaTypesReal/mushroom-creamy-mushroom-gallete.jpg';
import garlicGrillerMushroomPizzaImg from '../../images/pizzaTypesReal/mushroom-garlic-grilled-mushroom.jpg';
import butternutSquashPizzaImg from '../../images/pizzaTypesReal/vegan-butternut-squash.jpg';
import capresePizzaImg from '../../images/pizzaTypesReal/vegan-caprese-pizza.jpg';
import humusPizzaImg from '../../images/pizzaTypesReal/vegan-hummus-pizza.jpg';
import roastedCauliflowerPizzaImg from '../../images/pizzaTypesReal/vegan-roasted-cauliflower.jpg';
import spinachArtichokePizzaImg from '../../images/pizzaTypesReal/vegeterian-spinach-artichoke.jpg';
import spinachStuffedPizzaImg from '../../images/pizzaTypesReal/vegeterian-spinach-stuffed.jpg';
import tomatoOnionPhylloPizzaImg from '../../images/pizzaTypesReal/vegeterian-tomato-onion-phyllo.jpg';

const initialState = {
  pizzaTypes: [
    {
      id: "pizza-1",
      name: "breakfast pizza",
      imageUrl: breakfastPizzaImg,
      clicked: false,
      meat: true,
      vegan: false,
      vegeterian: false,
      mushrooms: false,
      mostPopular: true,
      ingredients: [
        "bacon",
        "sausage",
        "cheese",
        "egg",
        "potatoes"
      ],
      prices: [
        {
          size: "32",
          price: 10
        },
        {
          size: "42",
          price: 12
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 10
    },
    {
      id: "pizza-2",
      name: "chicago deep dish pizza",
      imageUrl: chichagoDeepDishPizzaImg,
      clicked: false,
      meat: true,
      vegan: false,
      vegeterian: false,
      mushrooms: true,
      ingredients: [
        "cheese",
        "tomatoes",
        "sausage",
        "pepperoni",
        "bell peppers"
      ],
      prices: [
        {
          size: "32",
          price: 9
        },
        {
          size: "42",
          price: 11
        },
        {
          size: "50",
          price: 13
        }
      ],
      orderPrice: 9
    },
    {
      id: "pizza-3",
      name: "californian pizza",
      imageUrl: californianPizzaImg,
      clicked: false,
      meat: true,
      vegan: false,
      vegeterian: false,
      mushrooms: true,
      mostPopular: true,
      ingredients: [
        "goat's cheese",
        "tomato",
        "baby vegetables",
        "smoked salmon",
        "red onions",
        "pepperoni",
        "BBQ chicken"
      ],
      prices: [
        {
          size: "32",
          price: 13
        },
        {
          size: "42",
          price: 15
        },
        {
          size: "50",
          price: 20
        }
      ],
      orderPrice: 13
    },
    {
      id: "pizza-4",
      name: "st loius pizza",
      imageUrl: stLouisPizzaImg,
      clicked: false,
      meat: true,
      vegan: false,
      vegeterian: false,
      mushrooms: true,
      ingredients: [
        "provel cheese",
        "tomato sauce",
        "oregano",
        "bacon",
        "mushrooms"
      ],
      prices: [
        {
          size: "32",
          price: 11
        },
        {
          size: "42",
          price: 13
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 11
    },
    {
      id: "pizza-5",
      name: "caramelized onion/mushroom pizza",
      imageUrl: caramelizedOnionPizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: true,
      mostPopular: true,
      ingredients: [
        "yellow onion",
        "sliced mushrooms",
        "garlic",
        "spinach",
        "mozzarella cheese",
        "parmesan cheese",
        "thyme leaves"
      ],
      prices: [
        {
          size: "32",
          price: 10
        },
        {
          size: "42",
          price: 12
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 10
    },
    {
      id: "pizza-6",
      name: "creamy mushroom galette",
      imageUrl: creamyMushroomGalettePizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: true,
      mostPopular: true,
      ingredients: [
        "goat cheese",
        "parmesan cheese",
        "black pepper",
        "mushrooms",
        "thyme leaves"
      ],
      prices: [
        {
          size: "32",
          price: 15
        },
        {
          size: "42",
          price: 18
        },
        {
          size: "50",
          price: 22
        }
      ],
      orderPrice: 15
    },
    {
      id: "pizza-7",
      name: "garlic grilled mushroom pizza",
      imageUrl: garlicGrillerMushroomPizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: true,
      ingredients: [
        "crimini mushrooms",
        "shiitake muchrooms",
        "garlic",
        "black pepper",
        "mozzarella cheese",
        "parmesan cheese",
        "button mushrooms"
      ],
      prices: [
        {
          size: "32",
          price: 10
        },
        {
          size: "42",
          price: 12
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 10
    },
    {
      id: "pizza-8",
      name: "butternut squash and almond ricotta pizza",
      imageUrl: butternutSquashPizzaImg,
      clicked: false,
      meat: false,
      vegan: true,
      vegeterian: true,
      mushrooms: false,
      ingredients: [
        "almond",
        "cornmeal",
        "garlic",
        "butternut squash",
        "white onion",
        "cranberries",
        "arugula"
      ],
      prices: [
        {
          size: "32",
          price: 8
        },
        {
          size: "42",
          price: 10
        },
        {
          size: "50",
          price: 13
        }
      ],
      orderPrice: 8
    },
    {
      id: "pizza-9",
      name: "caprese pizza",
      imageUrl: capresePizzaImg,
      clicked: false,
      meat: false,
      vegan: true,
      vegeterian: true,
      mushrooms: false,
      ingredients: [
        "tomatoes",
        "basil leaves",
        "garlic",
        "red pepper"
      ],
      prices: [
        {
          size: "32",
          price: 7
        },
        {
          size: "42",
          price: 9
        },
        {
          size: "50",
          price: 12
        }
      ],
      orderPrice: 7
    },
    {
      id: "pizza-10",
      name: "humus pizza with vegies",
      imageUrl: humusPizzaImg,
      clicked: false,
      meat: false,
      vegan: true,
      vegeterian: true,
      mushrooms: true,
      mostPopular: true,
      ingredients: [
        "humus",
        "mushrooms",
        "black olives",
        "artichokes",
        "cherry romato",
        "red onion",
        "red peppers"
      ],
      prices: [
        {
          size: "32",
          price: 11
        },
        {
          size: "42",
          price: 13
        },
        {
          size: "50",
          price: 16
        }
      ],
      orderPrice: 11
    },
    {
      id: "pizza-11",
      name: "roasted cauliflower pizza",
      imageUrl: roastedCauliflowerPizzaImg,
      clicked: false,
      meat: false,
      vegan: true,
      vegeterian: true,
      mushrooms: false,
      ingredients: [
        "cauliflower",
        "garlic powder",
        "sriracha",
        "white onion",
        "vegan ranch"
      ],
      prices: [
        {
          size: "32",
          price: 6
        },
        {
          size: "42",
          price: 8
        },
        {
          size: "50",
          price: 10
        }
      ],
      orderPrice: 6
    },
    {
      id: "pizza-12",
      name: "tomato-onion phyllo pizza",
      imageUrl: tomatoOnionPhylloPizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: false,
      mostPopular: true,
      ingredients: [
        "parmesan cheese",
        "mozzarella cheese",
        "onion",
        "tomatoes",
        "thyme"
      ],
      prices: [
        {
          size: "32",
          price: 10
        },
        {
          size: "42",
          price: 12
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 10
    },
    {
      id: "pizza-13",
      name: "spinach and artichoke pizza",
      imageUrl: spinachArtichokePizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: false,
      ingredients: [
        "nonalchocolic beer",
        "garlic",
        "shredded Italian cheese blend",
        "baby spinach",
        "artichoke hearts",
        "tomatoes"
      ],
      prices: [
        {
          size: "32",
          price: 15
        },
        {
          size: "42",
          price: 18
        },
        {
          size: "50",
          price: 22
        }
      ],
      orderPrice: 15
    },
    {
      id: "pizza-14",
      name: "spinach-stuffed pizza",
      imageUrl: spinachStuffedPizzaImg,
      clicked: false,
      meat: false,
      vegan: false,
      vegeterian: true,
      mushrooms: true,
      ingredients: [
        "mushrooms",
        "onion",
        "mozarella cheese",
        "spinach",
        "parmesan cheese"
      ],
      prices: [
        {
          size: "32",
          price: 10
        },
        {
          size: "42",
          price: 12
        },
        {
          size: "50",
          price: 15
        }
      ],
      orderPrice: 10
    }
  ],
  filterType: "all",
  orderStore: [],
  error: null,
  orderSuccess: false,
  fetchedOrders: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_PIZZA_TYPE:
      return {
        ...state,
        filterType: action.filterType
      };
    case actionTypes.SET_PIZZA_TYPE_TO_ALL:
      return {
        ...state,
        filterType: "all"
      };
    case actionTypes.ADD_PIZZA_TO_ORDER_STORE:
      return {
        ...state,
        orderStore: state.orderStore.concat({
          ...action.pizza,
        id: action.pizza.id + Math.random()})
      };
    case actionTypes.REMOVE_PIZZA_FROM_ORDER_STORE:
      const newOrderStore = state.orderStore.filter(pizza => pizza !== action.pizza);
      return {
        ...state,
        orderStore: newOrderStore
      };
    case actionTypes.ORDER_PIZZAS_SUCCESS:
      return {
        ...state,
        orderSuccess: true
      };
    case actionTypes.ORDER_PIZZAS_SUCCESS_FINISH:
      const clearedOrderStore = [];
      return {
        ...state,
        orderSuccess: false,
        orderStore: clearedOrderStore
      };
    case actionTypes.FETCH_PIZZA_TYPES_ORDERS_SUCCESS:
      return {
        ...state,
        fetchedOrders: action.orderData
      };
    default:
      return state;
  }
};

export default reducer;