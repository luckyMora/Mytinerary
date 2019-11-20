import { combineReducers } from "redux";

import cityreducer from "./cityreducer";
const rootreducer = combineReducers({city: cityreducer});
export default rootreducer;

