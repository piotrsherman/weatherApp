const API_KEY = "f4b9995aabd085a514a96289382703db";
const weatherContainer = document.querySelector("#weather-container");
const cityInput = document.querySelector("#city");
const cityName = document.querySelector("#city-name");
const weatherDescription = document.querySelector("#weather-description");
const temperature = document.querySelector("#temperature");

async function getWeather(city) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
}

async function handleSubmit(e) {
  e.preventDefault();
  const city = cityInput.value;
  const weatherData = await getWeather(city);
  cityName.innerHTML = weatherData.name;
  weatherDescription.innerHTML = weatherData.weather[0].description;
  temperature.innerHTML = `Temperature: ${weatherData.main.temp} &#8451;`;
}

weatherContainer.addEventListener("submit", handleSubmit);
