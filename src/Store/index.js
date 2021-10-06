import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import categorieSlice from "./categories.store.js";
import productSlice from "./products.store.js";

let reducers = combineReducers({
  categories: categorieSlice,
  products: productSlice,
});

const store = configureStore({ reducer: reducers });

export default store;
