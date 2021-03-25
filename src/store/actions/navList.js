import * as actionTypes from './actionTypes';

export const showNavlist = () => {
  return {
    type: actionTypes.SHOW_NAVLIST
  };
};

export const hideNavlist = () => {
  return {
    type: actionTypes.HIDE_NAVLIST
  };
};

export const navlistItemClicked = (itemId) => {
  return {
    type: actionTypes.NAVLIST_ITEM_CLICKED,
    itemId
  };
};

