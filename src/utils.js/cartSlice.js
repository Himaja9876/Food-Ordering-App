import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // [] or return {items: []};
      // RTK says either the state has to be mutated or return a new state
    },
  },
});

// creatSlice return an object with actions and reducer, so we export those actions and reducer
// the reducer functions are mapped to to the actions
/** 
 {
  actions: {
    addItem,
    removeItem,
    clearCart
  },
  reducer
 } */
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;