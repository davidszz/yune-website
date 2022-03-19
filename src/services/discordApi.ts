import axios from 'axios';

export const discordApi = axios.create({
  baseURL: 'https://discord.com/api/v10',
});
