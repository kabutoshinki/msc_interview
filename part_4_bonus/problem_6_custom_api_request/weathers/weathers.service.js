const axios = require("axios");

async function fetchWeathers(city) {
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Extract relevant weather information
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const weatherDescription = weatherData.weather[0].description;

    return {
      city: weatherData.name,
      country: weatherData.sys.country,
      latitude: weatherData.coord.lat,
      longitude: weatherData.coord.lon,
      temperature,
      humidity,
      weatherDescription,
    };
  } catch (error) {
    console.error("Error fetching weather:", error.message);
  }
}

module.exports = fetchWeathers;
