import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authSlice from '../components/Auth/AuthSlice';
import productSlice from '../components/Products/ProductSlice';
import DetailsSlice from '../components/Details/DetailsSlice';
import CartSlice from '../components/Cart/CartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    details: DetailsSlice,
    cart: CartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(fn: (state: RootState) => T) => T =
  useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
