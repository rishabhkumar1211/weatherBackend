const axios = require('axios');

const fetchWeather = async (lat, lon, apiKey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    return {
      provider: 'OpenWeather',
      temperature: response.data.main.temp,
      wind_speed: response.data.wind.speed,
      conditions: response.data.weather[0].description,
    };
  } catch (error) {
    console.error(`OpenWeather API error: ${error.message}`);
    return null;
  }
};

module.exports = { fetchWeather };
