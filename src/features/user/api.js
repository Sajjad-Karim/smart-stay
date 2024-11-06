import { STAY } from '@/http/config';

export const updateInfo = (payload) =>
  STAY.put('user', payload, {
    headers: {
      Authorization: localStorage.getItem('authToken'),
    },
  });
