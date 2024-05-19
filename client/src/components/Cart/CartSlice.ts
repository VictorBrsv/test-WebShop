import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { cart } from '../Cart/types/cartState';
import { product } from '../Products/types/productState';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] } as cart,
  reducers: {
    setCart: (state, action: PayloadAction<product[]>) => {
      state.items.push(...action.payload);
    },
    deleteItemFromCart: (state, action: PayloadAction<number>) => {
      const deleteItemId = action.payload;
      state.items = state.items.filter((item) => item.id !== deleteItemId);
    },
  },
});

export const { setCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
