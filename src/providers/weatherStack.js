const axios = require('axios');

/**
 * Fetch weather data from WeatherStack.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @param {string} apiKey - API key for WeatherStack.
 * @returns {object|null} Weather data or null if the request fails.
 */
const fetchWeather = async (lat, lon, apiKey) => {
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${lat},${lon}`;
  try {
    const response = await axios.get(url);
    return {
      provider: 'WeatherStack',
      temperature: response.data.current.temperature, // Temperature in Celsius
      wind_speed: response.data.current.wind_speed, // Wind speed in km/h
      conditions: response.data.current.weather_descriptions[0], // Weather description
    };
  } catch (error) {
    console.error(`WeatherStack API error: ${error.message}`);
    return null;
  }
};

module.exports = { fetchWeather };
