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
