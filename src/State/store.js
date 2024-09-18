import {applyMiddleware,combineReducers,legacy_createStore} from "redux"
import {thunk} from "redux-thunk"
import authReducer from "./Auth/Reducer"
import { customProductReducer } from "./Product/Reducer"


const rootReducers=combineReducers({
 auth:authReducer,
 product:customProductReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))