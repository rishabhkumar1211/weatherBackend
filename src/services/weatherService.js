const { fetchWeather: fetchOpenWeather } = require('../providers/openWeather');
const { fetchWeather: fetchWeatherAPI } = require('../providers/weatherAPI');
const {
  fetchWeather: fetchWeatherStack,
} = require('../providers/weatherStack');

const getWeatherData = async (lat, lon, keys) => {
  const results = await Promise.all([
    fetchOpenWeather(lat, lon, keys.openWeather),
    fetchWeatherAPI(lat, lon, keys.weatherAPI),
    fetchWeatherStack(lat, lon, keys.weatherStack),
  ]);

  return results.filter(Boolean); // Remove null responses from failed APIs
};

module.exports = { getWeatherData };
