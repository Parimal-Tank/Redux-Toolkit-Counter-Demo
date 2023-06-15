import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incermentCount,
  decrementCount,
} from "../redux/reducers/CounterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(incermentCount())}>+</button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </div>
  );
};

export default Counter;
