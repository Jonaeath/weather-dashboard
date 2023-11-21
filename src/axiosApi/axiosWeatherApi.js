import axios from 'axios';

const API_KEY = 'fafbcb003d5c6199e1193e344b94916d';
const URL = 'https://api.openweathermap.org/data/2.5';

const axiosWeatherApi = async (search) => {    
    try {
        const response = await axios.get(`${URL}/weather`, {
          params: {
            q: search,
            appid: API_KEY,
            units: 'metric',
          },
        });
    
        // Process for the response data
        return response.data;
      
    } catch (error) {
        // Handle API request errors
        throw new Error('Error for weather data');
      }    
};

export default axiosWeatherApi;
