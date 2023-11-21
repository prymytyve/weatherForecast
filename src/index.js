import "./style.css";
import { getWeather } from "./mod_getWeatherAsync";
const form = document.querySelector("#form");
const locationInput = document.querySelector("#location");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(locationInput.value);
  await getWeather(locationInput.value);
  form.reset();
});

// getWeather("");
