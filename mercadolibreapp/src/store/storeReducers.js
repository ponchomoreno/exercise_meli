import { configureStore } from "@reduxjs/toolkit";
import reducersExercisMeli from "./combineReducers";

export const storeExerciseMeli = configureStore({
  reducer: reducersExercisMeli,
});
