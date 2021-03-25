import * as actionTypes from '../actions/actionTypes';

const initialState = {
  listData: [
    {
      id: "about",
      name: "About us",
      clicked: false,
      dropdown: [
        {
          id: "about-1",
          name: "history",
          link: "/about/history"
        },
        {
          id: "about-2",
          name: "management",
          link: "/about/management"
        },
        {
          id: "about-3",
          name: "employees",
          link: "/about/employees"
        }
      ]
    },
    {
      id: "pizza-types",
      name: "pizza types",
      clicked: false,
      dropdown: [
        {
          id: "pizza-types-1",
          name: "all types",
          link: "/pizza-types"
        }
      ]
    },
    {
      id: "order",
      name: "order pizza",
      clicked: false,
      dropdown: [
        {
          id: "order-1",
          name: "choose pizza",
          link: "/pizza-types"
        },
        {
          id: "order-2",
          name: "make your own pizza",
          link: "/pizza-maker"
        }
      ]
    },
    {
      id: "join",
      name: "join us",
      clicked: false,
      dropdown: [
        {
          id: "join-1",
          name: "sign up",
          link: "/sign-up"
        },
        {
          id: "join-3",
          name: "work for us",
          link: "/job"
        }
      ]
    }
  ],
  navListShow: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SHOW_NAVLIST:
      return {
        ...state,
        navListShow: true
      };
    case actionTypes.HIDE_NAVLIST:
      const newListData = [
        ...state.listData
      ];
      newListData.forEach(item => {
        if(item.clicked) {
          item.clicked = false;
        }
      })
      return {
        ...state,
        listData: newListData,
        navListShow: false
      };
    case actionTypes.NAVLIST_ITEM_CLICKED:
      const updatedListData = [
        ...state.listData
      ];
      updatedListData.forEach(item => {
        if(item.id === action.itemId) {
          item.clicked = !item.clicked;
        } else if(item.id !== action.itemId && item.clicked) {
          item.clicked = false;
        }
      })
      return {
        ...state,
        listData: updatedListData
      };
    default:
      return state;
  };
};

export default reducer;