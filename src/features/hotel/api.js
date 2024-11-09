import { STAY } from '@/http/config';

export const hotelData = () => STAY.get('hotel');
export const hotelDetails = (payload) => STAY.get(`hotel/${payload}`);
