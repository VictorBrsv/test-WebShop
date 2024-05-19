import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { product } from './types/productState';

const initialState: product[] = [];

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<product[]>) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
