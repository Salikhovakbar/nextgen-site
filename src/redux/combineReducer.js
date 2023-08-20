import { combineReducers } from "redux";
import { languageReducer, tokenReducer } from "./reducer";
const joinedReducers = combineReducers({
    languageShift: languageReducer,
    id: tokenReducer
})

export { joinedReducers }