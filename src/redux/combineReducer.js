import { combineReducers } from "redux";
import { languageReducer } from "./reducer";
const joinedReducers = combineReducers({
    languageShift: languageReducer
})

export { joinedReducers }