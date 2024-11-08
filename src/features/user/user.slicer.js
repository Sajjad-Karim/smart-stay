import { createSlice } from '@reduxjs/toolkit';
import {
  updateUserInfo,
  updateUserPreferences,
  updateUserPicture,
  forgetUserPassword,
  updateUserPassword,
} from './user.action';

const initialState = {
  isUpdateUserSuccess: false,
  isUpdateUserLoading: false,
  isUpdateUserFailed: false,
  user: {},
  error: '',
  isUserPreferenceSuccess: false,
  isUserPreferenceLoading: false,
  isUserPreferenceFailed: false,
  userPreference: {},
  errorUserPreference: '',

  isUpdateUserProfileSuccess: false,
  isUpdateUserProfileLoading: false,
  isUpdateUserProfileFailed: false,
  updateMsg: '',
  updateError: '',

  isForgetPasswordSuccess: false,
  isForgetPasswordLoading: false,
  isForgetPasswordFailed: false,

  isResetPasswordSuccess: false,
  isResetPasswordLoading: false,
  isResetPasswordFailed: false,
};

const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  // login case
  extraReducers: (builder) => {
    builder.addCase(updateUserInfo.pending, (state) => {
      state.isUpdateUserLoading = true;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.isUpdateUserLoading = false;
      state.isUpdateUserSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      state.isUpdateUserLoading = false;
      state.isUpdateUserSuccess = false;
      state.isUpdateUserFailed = true;
      state.error = action.payload.error;
    });

    // userPreference
    builder.addCase(updateUserPreferences.pending, (state) => {
      state.isUserPreferenceLoading = true;
    });
    builder.addCase(updateUserPreferences.fulfilled, (state, action) => {
      state.isUserPreferenceLoading = false;
      state.isUserPreferenceSuccess = true;
      state.userPreference = action.payload;
    });
    builder.addCase(updateUserPreferences.rejected, (state, action) => {
      state.isUserPreferenceLoading = false;
      state.isUserPreferenceSuccess = false;
      state.isUserPreferenceFailed = true;
      state.errorUserPreference = action.payload.error;
    });
    // update-profile
    builder.addCase(updateUserPicture.pending, (state) => {
      state.isUpdateUserProfileLoading = true;
    });
    builder.addCase(updateUserPicture.fulfilled, (state, action) => {
      state.isUpdateUserProfileLoading = false;
      state.isUpdateUserProfileSuccess = true;
      state.updateMsg = action.payload;
    });
    builder.addCase(updateUserPicture.rejected, (state, action) => {
      state.isUpdateUserProfileLoading = false;
      state.isUpdateUserProfileSuccess = false;
      state.isUpdateUserProfileFailed = true;
      state.updateError = action.payload.error;
    });
    // forget-password
    builder.addCase(forgetUserPassword.pending, (state) => {
      state.isForgetPasswordLoading = true;
    });
    builder.addCase(forgetUserPassword.fulfilled, (state) => {
      state.isForgetPasswordLoading = false;
      state.isForgetPasswordSuccess = true;
    });
    builder.addCase(forgetUserPassword.rejected, (state) => {
      state.isForgetPasswordLoading = false;
      state.isForgetPasswordSuccess = false;
      state.isForgetPasswordFailed = true;
    });
    // reset-password
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isResetPasswordLoading = true;
    });
    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.isResetPasswordLoading = false;
      state.isResetPasswordSuccess = true;
    });
    builder.addCase(updateUserPassword.rejected, (state) => {
      state.isResetPasswordLoading = false;
      state.isResetPasswordSuccess = false;
      state.isResetPasswordFailed = true;
    });
  },
});

export default userSlicer.reducer;
