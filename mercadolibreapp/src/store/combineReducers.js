import { combineReducers } from "redux";
import { searchBoxReducers } from "../exercise_meli/searchBox/reducers";
import { foundedItemsReducers } from "../exercise_meli/foundedItems/reducers";
import { itemDetailReducers } from "../exercise_meli/itemDetails/reducers";

const reducersExercisMeli = combineReducers({
  searchBoxReducers,
  foundedItemsReducers,
  itemDetailReducers
});

export default reducersExercisMeli;
