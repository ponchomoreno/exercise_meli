import * as types from "./actionsTypes";
import * as itemDetailsTypes from "../itemDetails/actionsTypes";
import { getProductDescriptionMeli } from "../itemDetails/actions";

export const getItemById = (itemId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:5000/get/products-meli/${itemId}`).then(
      (response) => {
        response
          .json()
          .then((data) => {
            dispatch({
              type: types.SET_ITEM_TO_SHOW,
              payload: data,
            });
          })
          .catch((error) => {
            return error.response;
          });
      }
    );
  };
};

export const cleanItemById = () => {
  return async (dispatch) => {
    dispatch({
      type: types.CLEAN_ITEM_TO_SHOW,
    });
  };
};
