import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {
  authState,
  registrationState,
  authorizationState,
} from './types/AuthState';
import * as api from '../../App/Api';

const initialState: authState = {
  user: undefined,
  error: undefined,
};

export const registration = createAsyncThunk(
  'auth/registration',
  (value: registrationState) => api.authRegistration(value)
);
export const authorization = createAsyncThunk(
  'auth/login',
  (value: authorizationState) => api.authorization(value)
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
