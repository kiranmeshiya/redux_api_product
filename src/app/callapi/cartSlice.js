import { createSlice } from '@reduxjs/toolkit';
import produce from 'immer'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addToCart : (state,action) =>
    {
      const itemId  = action.payload;
      const item = state.find((item) => item.id === itemId.id);
      if(item){
        item.quantity += 1;
        item.price = parseFloat(item.quantity * item.originPrice);
      }
      else
      {
        const item = { ...action.payload, quantity: 1, originPrice:action.payload.price };
        state.push(item);
      }
    },
    
    removeToCart : (state,action) => {
      return state = state.filter((item) => item.id !== action.payload)
    },

    increment:produce((state, action)=>
    {
     const { itemId, originalPrice } = action.payload;
     const item = state.find((item) => item.id === itemId);
      if(item){
        item.quantity += 1;
        item.price = (item.price + originalPrice);
     }
    }),

    decrement:produce((state, action)=>
    {
      const {itemId,originPrice} = action.payload;
      const item = state.find((item) => item.id === itemId)
      if(item){
        item.quantity -= 1;
        item.price = item.price - originPrice;
      }
    }),
    // searchApi : produce((state,action) =>
    // {
    //   const search = action.payload;
    //   const res =  fetch(`https://fakestoreapi.com/products/category/${search}`);
    //   const data =  res.json();
    // return data;
    // })
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, increment, decrement,searchApi} = cartSlice.actions

export default cartSlice.reducer