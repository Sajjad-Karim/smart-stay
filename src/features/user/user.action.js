import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateInfo,
  updatePreferences,
  updatePicture,
  forgetPassword,
  updatePassword,
} from './api';

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
      const res = await updatePicture(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
//////////////////////////////////////
export const forgetUserPassword = createAsyncThunk(
  'user/forgetPassword',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await forgetPassword(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
//////////////////////////////////////
export const updateUserPassword = createAsyncThunk(
  'user/resetPassword',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await updatePassword(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
