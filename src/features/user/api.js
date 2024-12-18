import { STAY } from '@/http/config';

export const updateInfo = (payload) =>
  STAY.put('user', payload, {
    headers: {
      Authorization: localStorage.getItem('authToken'),
    },
  });

// update preferences
export const updatePreferences = (payload) =>
  STAY.post('user/update-preference', payload, {
    headers: {
      Authorization: localStorage.getItem('authToken'),
    },
  });
// update preferences
export const updatePicture = (payload) =>
  STAY.post('user/update-picture?imageType=display', payload, {
    headers: {
      Authorization: localStorage.getItem('authToken'),
    },
  });
// forget password
export const forgetPassword = (payload) =>
  STAY.get(`user/forget-password/${payload}`);
// update password
export const updatePassword = (payload) =>
  STAY.post('user/update-password', payload);
