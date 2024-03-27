import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const apiKey = import.meta.env.VITE_REACT_API_KEY


const options = {
    url: BASE_URL,
    params: {
      maxResults: '25'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchFromApi = async (url) => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options); 
        const results = await response.data.items;
        return results
    }catch(error) {
        console.log(error); 
    }
}
