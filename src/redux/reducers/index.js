import CounterReducer from "../reducers/CounterReducer";
import notificationReducer from "./NotificationReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    counter:CounterReducer,
    notify:notificationReducer
});

