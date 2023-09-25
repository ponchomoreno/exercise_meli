import * as types from "./actionsTypes";

const initialState = {
  productDescription: {},
};

export const itemDetailReducers = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  if (action.type === types.SET_PRODUCT_ITEM_DESCRIPTION_MELI) {
    return Object.assign({}, state, {
      productDescription: action.payload,
    });
  } else if (action.type === types.CLEAN_PRODUCT_DESCRIPTION_MELI) {
    return Object.assign({}, state, {
      productDescription: {},
    });
  } else {
    return state;
  }
};
