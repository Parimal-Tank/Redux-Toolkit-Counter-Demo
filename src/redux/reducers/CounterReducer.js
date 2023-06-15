import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incermentCount: (state) => {
      state.count++;
    },
    decrementCount: (state) => {
      if (state.count < 1) {
        state.count = 0;
      } else {
        state.count--;
      }
    },
  },
});

export default counterSlice.reducer;

export const { incermentCount, decrementCount } = counterSlice.actions;
