import { combineReducers } from '@reduxjs/toolkit';
import authSlicer from '../features/auth/auth.slicer';
import userSlicer from '../features/user/user.slicer';
const rootReducers = combineReducers({
  auth: authSlicer,
  users: userSlicer,
});
export default rootReducers;
