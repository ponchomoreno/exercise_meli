import * as types from "./actionsTypes";

const initialState = {
  foundItems: [],
  queryParamsValue: "",
};

export const searchBoxReducers = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  if (action.type === types.GET_ITEM_BY_SEARCHBOX) {
    return Object.assign({}, state, {
      foundItems: action.payload,
    });
  } else if (action.type === types.CLEAN_GET_ITEM_BY_SEARCHBOX) {
    return Object.assign({}, state, {
      foundItems: [],
    });
  } else if (action.type === types.SET_QUERY_PARAMS) {
    return Object.assign({}, state, {
      queryParamsValue: action.payload,
    });
  } else {
    return state;
  }
};
