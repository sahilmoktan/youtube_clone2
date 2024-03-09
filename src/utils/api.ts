// import axios from "axios";

// const BASE_URL ='https://youtube138.p.rapidapi.com/auto-complete/'

// const options = {
//   params: {
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// export const fetchDataFromApi = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// };


// import axios from "axios";

// const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/';

// const options = {
//   method: 'GET',  // Specify the HTTP method
//   params: {
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// // Function to make an initial request to the API
// export const makeInitialRequest = async () => {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Function to fetch data from the API based on the provided URL
// export const fetchDataFromApi = async (url) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };


import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com/auto-complete/';

const options = {
  method: 'GET',
  params: {
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
