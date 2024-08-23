import { combineReducers } from "redux";
import loginReducer from "./reducer_Login";


const allReducers = combineReducers({
    loginReducer
    //them nhieu reducer vao day
})

export default allReducers;