import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    valOne:(state)=>{
      state.value = 1;
    }
  },
});

export const { increment, decrement, valOne } = pageSlice.actions;

export default pageSlice.reducer;
