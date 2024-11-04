import { combineReducers } from '@reduxjs/toolkit';
import authSlicer from '../features/auth/auth.slicer';

const rootReducers = combineReducers({
  auth: authSlicer,
});
export default rootReducers;
