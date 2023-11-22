import "./style.css";
import { getWeather } from "./mod_getWeatherAsync";
// import { WeatherBlock, TodayWeatherBlock } from "../mod_weatherClass";
import { weatherObjCreator } from "./mod_weatherDataHandler";
const form = document.querySelector("#form");
const locationInput = document.querySelector("#location");

weatherDisplay();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  weatherDisplay(locationInput.value);
  form.reset();
});

async function weatherDisplay(val) {
  const i = await getWeather(val);
  console.log(i.location.name);
  weatherObjCreator(i.current, i.forecast.forecastday);
}
