import axios from "axios";

const BASE_URL ='https://youtube138.p.rapidapi.com/auto-complete/'

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};