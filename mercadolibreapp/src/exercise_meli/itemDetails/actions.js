import * as types from "./actionsTypes";

export const getProductDescriptionMeli = (idItem) => {
  return async (dispatch) => {
    await fetch(`http://localhost:5000/get/products-meli/${idItem}/description`)
      .then((response) => {
        response.json().then((data) => {
          dispatch({
            type: types.SET_PRODUCT_ITEM_DESCRIPTION_MELI,
            payload: data,
          });
        });
      })
      .catch(() => {});
  };
};

export const cleanProductDescription = () => {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAN_PRODUCT_DESCRIPTION_MELI,
    });
  };
};
