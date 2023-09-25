import * as types from "./actionsTypes";

const initialState = {
  itemMeliToShow: {},
};

export const foundedItemsReducers = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  if (action.type === types.SET_ITEM_TO_SHOW) {
    return Object.assign({}, state, {
      itemMeliToShow: action.payload,
    });
  } else if (action.type === types.CLEAN_ITEM_TO_SHOW) {
    return Object.assign({}, state, {
      itemMeliToShow: {},
    });
  } else {
    return state;
  }
};
