import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  
  reducers: {
    addToCart : (state,action) => {
        state.push(action.payload);
    },
    
    removeToCart : (state,action) => {
      return state = state.filter((item) => item.id !== action.payload)
    }

    

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart} = cartSlice.actions

export default cartSlice.reducer