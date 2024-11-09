import { getHotelData, getSingleHotel } from './hotel.action';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHotelDataSuccess: false,
  isHotelDataLoading: false,
  isHotelDataFailed: false,

  isHotelDetailsSuccess: false,
  isHotelDetailsLoading: false,
  isHotelDetailsFailed: false,

  hotelData: [],
  hotelDetails: {},
  error: '',
};

const hotelSlicer = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},

  // all hotels case
  extraReducers: (builder) => {
    builder.addCase(getHotelData.pending, (state) => {
      state.isHotelDataLoading = true;
    });
    builder.addCase(getHotelData.fulfilled, (state, action) => {
      state.isHotelDataLoading = false;
      state.isHotelDataSuccess = true;
      state.hotelData = action.payload;
    });
    builder.addCase(getHotelData.rejected, (state, action) => {
      state.isHotelDataLoading = false;
      state.isHotelDataSuccess = false;
      state.isHotelDataFailed = true;
      state.error = action.payload.error;
    });

    // single hotel details
    builder.addCase(getSingleHotel.pending, (state) => {
      state.isHotelDetailsLoading = true;
    });
    builder.addCase(getSingleHotel.fulfilled, (state, action) => {
      state.isHotelDetailsLoading = false;
      state.isHotelDetailsSuccess = true;
      state.hotelDetails = action.payload;
    });
    builder.addCase(getSingleHotel.rejected, (state, action) => {
      state.isHotelDetailsLoading = false;
      state.isHotelDetailsSuccess = false;
      state.isHotelDetailsFailed = true;
      state.error = action.payload.error;
    });
  },
});

export default hotelSlicer.reducer;
