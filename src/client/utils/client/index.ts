import axios from 'axios';

export const client = axios.create({
  baseURL: process?.env?.NEXT_PUBLIC_API_URL || '',
  params: { api_token: process?.env?.NEXT_PUBLIC_API_TOKEN || '' },
});

export const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});
