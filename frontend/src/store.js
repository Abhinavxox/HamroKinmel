import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducer,
  productDetailReducer,
} from "./reducers/productReducers";
import {
  authReducer,
  forgotPasswordReducer,
  userReducer,
} from "./reducers/userReducers";
const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
