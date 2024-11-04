import { STAY } from '../../http/config';

export const loginApi = (payload) => STAY.post('jwt/login', payload);

export const registerApi = (payload) => STAY.post('jwt/register', payload);

export const checkSessionApi = (payload) =>
  STAY.get('jwt/me', {
    headers: {
      Authorization: payload,
    },
  });
