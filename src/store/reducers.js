import { combineReducers } from '@reduxjs/toolkit';
import authSlicer from '../features/auth/auth.slicer';
import userSlicer from '../features/user/user.slicer';
import hotelSlicer from '../features/hotel/hotel.slicer';
const rootReducers = combineReducers({
  auth: authSlicer,
  user: userSlicer,
  hotel: hotelSlicer,
});
export default rootReducers;
