import { createAsyncThunk } from '@reduxjs/toolkit';
import { hotelData, hotelDetails } from './api';

export const getHotelData = createAsyncThunk(
  'hotels',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await hotelData();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
export const getSingleHotel = createAsyncThunk(
  'hotels',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await hotelDetails(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
