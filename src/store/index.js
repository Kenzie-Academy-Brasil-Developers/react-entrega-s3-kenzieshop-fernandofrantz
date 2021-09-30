import { createStore, combineReducers } from "redux";
import cartReducer from "./modules/Cart/reducer";
import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers);
export default store;
