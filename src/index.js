import "./style.css";
import { getWeather } from "./mod_getWeatherAsync";
import { WeatherBlock, weatherObjCreator } from "./mod_weatherDataHandler";
import { currentForecastCreator } from "./mod_currentForecast.js";
const form = document.querySelector("#form");
const locationInput = document.querySelector("#location");
const headerInfo = document.querySelector(".headerInfo");
const main = document.querySelector(".mainContent");

//initial load
weatherDisplay("auto:ip");

//form control and results
async function weatherDisplay(val) {
  const i = await getWeather(val);
  let time = i.current.last_updated;
  let location = i.location.name;
  headerInfo.textContent = time + " " + location;
  // console.log(i);
  weatherObjCreator(i.forecast.forecastday);
  currentForecastCreator(i.current);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  main.replaceChildren();
  weatherDisplay(locationInput.value);
  form.reset();
});

const tempUnitCheck = document.querySelector("#tempUnit");
const tempUnitLabel = document.querySelector("#tempUnit+label");

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
