import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import bodyReducer from "./body-reducer";
import thunk from "redux-thunk"
import cartReducer from "./cart-reducer"
import currencyReducer from "./currency-reducer";
import pdpReducer from "./pdp"

let reducers = combineReducers({
   cart: cartReducer,
   currency: currencyReducer,
   body: bodyReducer,
   pdp: pdpReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.__store__ = store

export default store
