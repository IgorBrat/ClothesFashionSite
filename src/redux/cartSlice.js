import { createSlice } from '@reduxjs/toolkit';
import { enableMapSet } from  "immer";

enableMapSet();

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: new Array(),
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.value.delete(action.payload);
    },
  }
});

export const {addItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;
