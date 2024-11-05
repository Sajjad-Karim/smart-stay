import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerApi, loginApi, checkSessionApi, googleSignIn } from './api';
/////////////////////////////////////////////////
export const userLogin = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await loginApi(payload);

      return res.data;
    } catch (err) {
      // Use rejectWithValue to pass the error payload to the reducer
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
/////////////////////////////////////////////////
export const userRegister = createAsyncThunk(
  'auth/register',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await registerApi(payload);

      return res.data;
    } catch (err) {
      // Use rejectWithValue to pass the error payload to the reducer
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

///////////////////////////////////////////////////
export const checkSession = createAsyncThunk('auth/checkSession', async () => {
  try {
    const token = localStorage.getItem('authToken');
    const res = await checkSessionApi(token);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
});
///////////////////////////////////////////////////

export const googleLogin = createAsyncThunk(
  'auth/google',
  async (payload, { rejectWithValue }) => {
    try {
      const authData = await googleSignIn(payload);
      let newData = {
        email: authData.data.email,
        provider: 'google',
      };

      const res = await loginApi(newData);

      return res.data;
    } catch (err) {
      // Use rejectWithValue to pass the error payload to the reducer
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);
