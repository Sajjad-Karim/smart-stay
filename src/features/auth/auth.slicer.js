import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegister, googleLogin } from './auth.actions';

const initialState = {
  isLoginSuccess: false,
  isLoginLoading: false,
  isLoginFailed: false,
  login: {},
  error: {},
  isRegisterSuccess: false,
  isRegisterLoading: false,
  isRegisterFailed: false,
};

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetLoginState: (state) => {
      state.isRegisterSuccess = false;
      state.isRegisterLoading = false;
      state.isRegisterFailed = false;
      state.isLoginLoading = false;
      state.isLoginSuccess = false;
      state.isLoginFailed = false;
      localStorage.removeItem('authToken');
      state.login = '';
    },
  },

  // login case
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      state.isLoginSuccess = true;
      state.login = action.payload;
      localStorage.setItem('authToken', action.payload.accessToken);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoginLoading = false;
      state.isLoginSuccess = false;
      state.isLoginFailed = true;
      state.error = action.payload.error;
    });

    // google login
    builder.addCase(googleLogin.pending, (state) => {
      state.isLoginLoading = true;
    });
    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      state.isLoginSuccess = true;
      state.login = action.payload;
      localStorage.setItem('authToken', action.payload.accessToken);
    });
    builder.addCase(googleLogin.rejected, (state, action) => {
      state.isLoginLoading = false;
      state.isLoginSuccess = false;
      state.isLoginFailed = true;
      state.error = action.payload.error;
    });

    // register case
    builder.addCase(userRegister.pending, (state) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterFailed = false;
      state.isRegisterFailed = false;
      state.isRegisterSuccess = true;
      state.login = action.payload;
      localStorage.setItem('authToken', action.payload.accessToken);
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isRegisterLoading = false;
      state.isRegisterSuccess = false;
      state.isRegisterFailed = true;
      state.error = action.payload.error;
    });
  },
});

export default authSlicer.reducer;
export const { resetLoginState } = authSlicer.actions;
