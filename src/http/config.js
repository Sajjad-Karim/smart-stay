import axios from 'axios';

export const BaseUrl = 'http://localhost:8000/api/';
export const profileBaseUrl = 'http://localhost:8000/public/profile/display';

export const STAY = axios.create({ baseURL: BaseUrl });
