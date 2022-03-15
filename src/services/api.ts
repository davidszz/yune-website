import axios from 'axios';

console.log(process.env);

export const api = axios.create({
  baseURL: `${process.env.BASE_URL ?? 'https://yunestore.xyz'}/api`,
});