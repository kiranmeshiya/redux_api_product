import { createSlice } from '@reduxjs/toolkit';
export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export const productSlice = createSlice({
  name: 'product',
  initialState:{
    data: [],
    status: STATUSES.IDLE,
},
  reducers: {
     setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    

  },
})

// Action creators are generated for each case reducer function
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(item) {
      return async function fetchProductThunk(dispatch, getState) {
          dispatch(setStatus(STATUSES.LOADING));
          try {
              const res = await fetch(`https://fakestoreapi.com/products/category/${item}`);
              const data = await res.json();
              dispatch(setProducts(data));
              dispatch(setStatus(STATUSES.IDLE));
          } catch (err) {
              console.log(err);
              dispatch(setStatus(STATUSES.ERROR));
          }
      };
  }
  
  export function fetchAllProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch(`https://fakestoreapi.com/products`);
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}