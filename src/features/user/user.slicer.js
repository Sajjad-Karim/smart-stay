import { createSlice } from '@reduxjs/toolkit';
import {
  updateUserInfo,
  updateUserPreferences,
  updateUserPicture,
} from './user.action';

const initialState = {
  isUpdateUserSuccess: false,
  isUpdateUserLoading: false,
  isUpdateUserFailed: false,
  user: {},
  error: '',
  isUserPreferenceSucesee: false,
  isUserPreferenceLoading: false,
  isUserPreferenceFailed: false,
  userPreference: {},
  errorUserPreference: '',

  isUpdateUserProfileSuccess: false,
  isUpdateUserProfileLoading: false,
  isUpdateUserProfileFailed: false,
  updateMsg: '',
  updateError: '',
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
      state.isUserPreferenceSucesee = true;
      state.userPreference = action.payload;
    });
    builder.addCase(updateUserPreferences.rejected, (state, action) => {
      state.isUserPreferenceLoading = false;
      state.isUserPreferenceSucesee = false;
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
  },
});

export default userSlicer.reducer;
