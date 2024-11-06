import { STAY } from '@/http/config';

export const updateInfo = (payload) =>
  STAY.put('user', {
    headers: {
      Authorization: localStorage.getItem('authToken'),
    },
    payload,
  });
