import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: new Array(),
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const idx = state.value.findIndex(item => item.content.id === action.payload.content.id);
      if (idx === -1) {
        console.log("No such item");
        state.value.push(action.payload);
      }
      else {
        console.log(`Found ${state.value[idx].count} items`);
        state.value[idx].count += action.payload.count;
      }
      console.log("added");
      console.log(state.value);
    },
    deleteItem: (state, action) => {
      state.value.forEach((item, index) => {
        if (item.content.id === action.payload) {
          state.value.splice(index, 1);
          console.log('deleted');
          console.log(state.value);
        }
      });
    },
  }
});

export const {addItem, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;
