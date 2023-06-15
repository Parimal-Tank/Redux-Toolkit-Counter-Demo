import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducers/CounterReducer";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export default store;
