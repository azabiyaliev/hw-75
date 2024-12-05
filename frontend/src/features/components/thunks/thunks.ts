import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../../axiosAPI.ts';

export const fetchPostEncoded = createAsyncThunk(
  "postEncoded/fetchPostEncoded",
  async () => {
  await axiosAPI.post("encode",);
});