import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateInfo, updatePreferences, updatePicture } from './api';

export const updateUserInfo = createAsyncThunk(
  'user/update',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updateInfo(payload);
      return res.data;
    } catch (err) {
      // Use rejectWithValue to pass the error payload to the reducer
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

//////////////////////////////////////
export const updateUserPreferences = createAsyncThunk(
  'user/preferences',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updatePreferences(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
//////////////////////////////////////
export const updateUserPicture = createAsyncThunk(
  'user/picture',
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);

      const res = await updatePicture(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
