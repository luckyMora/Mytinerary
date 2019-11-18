import { combineReducers } from "redux";

import citiesreducer from "./cityreducer";
const rootreducer = combineReducers({cities: citiesreducer});
export default rootreducer;

