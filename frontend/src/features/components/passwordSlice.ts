import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { IPassword } from '../../types';
import { fetchPostEncoded } from './thunks/thunks.ts';

interface dishState {
  msg: IPassword[];
  isFetching: boolean;
  error: boolean;
}

const initialState: dishState = {
  msg: [],
  isFetching: false,
  error: false,
};
export const passwordList = (state: RootState) => state.password.msg;

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers:{
  },
  extraReducers:(builder) => {
    builder
      .addCase(fetchPostEncoded.pending, (state) => {
        state.isFetching = true;
        state.error = false;
      })
      .addCase(fetchPostEncoded.fulfilled, (state, {payload: msg}) => {
        state.isFetching = true;
        state.msg = msg
      })
      .addCase(fetchPostEncoded.rejected, (state) => {
        state.isFetching = false;
        state.error = true;
      })
}});

export const passwordReducer = passwordSlice.reducer;
export const {} = passwordSlice.actions;
