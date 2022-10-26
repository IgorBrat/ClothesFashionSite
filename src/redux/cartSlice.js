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
    },
    deleteItem: (state, action) => {
      const idx = state.value.findIndex(item => item.content.id === action.payload);
      state.value.splice(idx, 1);
      console.log('deleted');
    },
    changeCount: (state, action) => {
      const idx = state.value.findIndex(item => item.content.id === action.payload.id);
      if (action.payload.increase) {
        state.value[idx].count += 1
      }
      else {
        state.value[idx].count -= 1
      }
    },
  }
});

export const {addItem, deleteItem, changeCount} = cartSlice.actions;
export default cartSlice.reducer;
