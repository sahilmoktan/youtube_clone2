// api.ts
import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete';

const options: AxiosRequestConfig = {
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromApi = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?q=${query}`, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
