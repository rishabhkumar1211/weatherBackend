const axios = require('axios');

/**
 * Fetch weather data from WeatherAPI.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @param {string} apiKey - API key for WeatherAPI.
 * @returns {object|null} Weather data or null if the request fails.
 */
const fetchWeather = async (lat, lon, apiKey) => {
  const url = `https://api.weatherapi.com/v1/current.json?q=${lat},${lon}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    return {
      provider: 'WeatherAPI',
      temperature: response.data.current.temp_c, // Temperature in Celsius
      wind_speed: response.data.current.wind_kph, // Wind speed in km/h
      conditions: response.data.current.condition.text, // Weather condition
    };
  } catch (error) {
    console.error(`WeatherAPI error: ${error.message}`);
    return null;
  }
};

module.exports = { fetchWeather };
