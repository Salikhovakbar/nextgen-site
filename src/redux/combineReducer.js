import { combineReducers } from "redux";
import { languageReducer, testReducer, testLevelReducer } from "./reducer";
const joinedReducers = combineReducers({
    languageShift: languageReducer,
    test: testReducer,
    testLevel: testLevelReducer
})

export { joinedReducers }