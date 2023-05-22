import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../app/callapi/productSlice';
import cartReducer from '../app/callapi/cartSlice'
export default configureStore({
  reducer: {
  
    cart: cartReducer,
        product: productReducer
  },
})