import * as types from "./actionsTypes";

export const getItemsFromSearchBox = (productName) => {
  return async (dispatch) => {
    await fetch(
      `http://localhost:5000/get/products-meli?nameItem=${productName}`
    )
      .then((response) => {
        response.json().then((data) => {
          let itemsResults = [];
          if (data && data.results && data.results.length > 0) {
            itemsResults = data.results.slice(0, 4);
          }
          dispatch({
            type: types.GET_ITEM_BY_SEARCHBOX,
            payload: itemsResults,
          });
        });
      })
      .catch((error) => {
        return error.response;
      });
  };
};

export const setQueryParamsUrlSearch = (query) => {
  return async (dispatch) => {
    dispatch({
      type: types.SET_QUERY_PARAMS,
      payload: query,
    });
  };
};

export const cleanItemsStored = () => {
  return async (dispatch) => {
    dispatch({ type: types.CLEAN_GET_ITEM_BY_SEARCHBOX });
  };
};
