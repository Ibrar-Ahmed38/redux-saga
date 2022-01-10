import petCounter from "./petCounter";
import petFavourite from "./petFavourite";
import users  from "./users";
import { combineReducers } from "redux";

const reducer = combineReducers({petCounter, petFavourite, users})

export default reducer 