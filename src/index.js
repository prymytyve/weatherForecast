import "./style.css";
import { getWeather } from "./mod_getWeatherAsync";
import { getGif } from "./mod_getGiphyAsync";
import { WeatherBlock, weatherObjCreator } from "./mod_weatherDataHandler";
import { currentForecastCreator } from "./mod_currentForecast.js";
import format from "date-fns/format";
const form = document.querySelector("#form");
const locationInput = document.querySelector("#location");
const forecastRow = document.querySelector(".forecastRow");
const main = document.querySelector(".mainContent");
const footer = document.querySelector("footer");

//initial load
weatherDisplay("auto:ip");

//form control and results
async function weatherDisplay(val) {
  const start = Date.now();
  const weatherVal = await getWeather(val);
  const i = weatherVal[0];
  const weatherTime = weatherVal[1];
  const conditionVal = i.current.condition.text;
  let cond;
  conditionVal === "Partly cloudy" ? (cond = "Cloudy") : (cond = conditionVal);
  const gifData = await getGif(cond);
  const gif = gifData[0];
  const gifTime = gifData[1];
  const gifUrl = gif.data.images.original.url;
  weatherObjCreator(i.forecast.forecastday);
  currentForecastCreator(i.current, i.location.name, gifUrl);
  const getTime = (Date.now() - start) / 1000;
  const timers = { Weatherapi: weatherTime, Giphyapi: gifTime, Total: getTime };
  footerAppend(timers);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  main.replaceChildren();
  forecastRow.replaceChildren();
  footer.replaceChildren();
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

function footerAppend(v) {
  for (const [key, value] of Object.entries(v)) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${value}s`;
    footer.appendChild(p);
  }
}
