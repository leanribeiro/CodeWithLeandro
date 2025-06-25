import axios from 'axios';

const BASE_URL = 'https://localhost:8000/api';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});
