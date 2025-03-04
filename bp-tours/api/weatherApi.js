import axios from "axios";

export async function getWeather() {
  const API_KEY = "84aa72d9ce438f8453dca32203ea983a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Blackpool&units=metric&appid=${API_KEY}`;

  const { data } = await axios.get(url);
  return `${data.main.temp}°C | ${data.weather[0].description}`;
}

