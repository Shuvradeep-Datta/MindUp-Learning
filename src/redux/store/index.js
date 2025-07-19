import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/CounterSlice';
import NotifyReducer from '../slice/NotifySlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    notify: NotifyReducer
  },
})





export default store;