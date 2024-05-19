import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { product } from '../Products/types/productState';

const initialState: product = {
  id: 0,
  title: '',
  price: 0,
  category: '',
  description: '',
  image: '',
  rating: {
    rate: 0,
    count: 0,
  },
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<product>) => {
      return action.payload;
    },
  },
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
