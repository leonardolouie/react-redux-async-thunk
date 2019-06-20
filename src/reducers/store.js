import {createStore, combineReducers, applyMiddleware} from "redux"
import counter from "./counterReducer"
import fetch from "./fetchReducer"
import thunk from 'redux-thunk';
const store = createStore(combineReducers({counter, fetch}),applyMiddleware(thunk));

export default store