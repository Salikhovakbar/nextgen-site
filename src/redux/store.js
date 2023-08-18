import { createStore } from 'redux'
import { joinedReducers } from './combineReducer'
const store = createStore(joinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export { store }