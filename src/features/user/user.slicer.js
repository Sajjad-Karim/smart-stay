import { createSlice } from '@reduxjs/toolkit';
import { updateUserInfo } from './user.action';

const initialState = {
  isUpdateUserSuccess: false,
  isUpdateUserLoading: false,
  isUpdateUserFailed: false,
  user: {},
  error: '',
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
  },
});

export default userSlicer.reducer;
