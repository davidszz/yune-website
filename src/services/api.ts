import axios from 'axios';

export const api = axios.create({
  baseURL: `${process.env.BASE_URL ?? 'https://yunestore.xyz'}/api`,
});