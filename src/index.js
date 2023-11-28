import "./style.css";
import { getWeather } from "./mod_getWeatherAsync";
import { WeatherBlock, weatherObjCreator } from "./mod_weatherDataHandler";
import { currentForecastCreator } from "./mod_currentForecast.js";
import format from "date-fns/format";
const form = document.querySelector("#form");
const locationInput = document.querySelector("#location");
const forecastRow = document.querySelector(".forecastRow");
const main = document.querySelector(".mainContent");

//initial load
weatherDisplay("auto:ip");

//form control and results
async function weatherDisplay(val) {
  const i = await getWeather(val);
  // console.log(i);
  weatherObjCreator(i.forecast.forecastday);
  currentForecastCreator(i.current, i.location.name);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  main.replaceChildren();
  forecastRow.replaceChildren();
  weatherDisplay(locationInput.value);
  form.reset();
});

const tempUnitCheck = document.querySelector("#tempUnit");
const tempUnitLabel = document.querySelector("#tempUnit+div>label");

const unitChange = (value) => {
  const containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    const temp = container.querySelector(".temp");
    const dataTemp = temp.getAttribute(`${value}`);
    temp.textContent = dataTemp;
  });
};

tempUnitCheck.addEventListener("change", (e) => {
  if (tempUnitCheck.checked === true) {
    tempUnitLabel.textContent = "°C";
    unitChange("tempC");
  } else if (tempUnitCheck.checked === false) {
    tempUnitLabel.textContent = "°F";
    unitChange("tempF");
  }
});
