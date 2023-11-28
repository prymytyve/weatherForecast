import { getGif } from "./mod_getGiphyAsync";
import format from "date-fns/format";
const main = document.querySelector(".mainContent");
class CurrentForecast {
  constructor(a, b, c, d, e, f, g) {
    this._tempC = a;
    this._tempF = b;
    this._condition = c;
    this._icon = d;
    this._gifUrl = e;
    this._time = f;
    this._location = g;
  }

  formatTime = () => {
    return format(new Date(this._time), "iii, MMM dd h:mm aaaa");
  };

  appendThis = () => {
    const div = document.createElement("div");
    div.classList.add("container", "current");
    const location = document.createElement("p");
    location.classList.add("locationP");
    location.textContent = this._location;
    const time = document.createElement("p");
    time.classList.add("timeP");
    time.textContent = this.formatTime();
    const temp = document.createElement("p");
    temp.classList.add("temp");
    const tempUnitCheck = document.querySelector("#tempUnit");
    let tempChoice; //display temp in celsius is checkbox is checked, else displays in fahrenheit (default)
    const tC = this._tempC + "°C";
    const tF = this._tempF + "°F";
    tempUnitCheck.checked === true ? (tempChoice = tC) : (tempChoice = tF);
    temp.textContent = tempChoice;
    temp.setAttribute("tempC", `${tC}`);
    temp.setAttribute("tempF", `${tF}`);
    const condition = document.createElement("p");
    condition.textContent = this._condition;
    const img = new Image();
    img.src = this._icon;
    const gif = new Image();
    gif.src = this._gifUrl;

    const infoRow = document.createElement("div");
    infoRow.classList.add("infoRow");
    infoRow.appendChild(location);
    infoRow.appendChild(time);
    const tempStuff = document.createElement("div");
    tempStuff.classList.add("tempStuff");
    const div2 = document.createElement("div");
    div2.classList.add("iconAndCond");
    div2.appendChild(img);
    div2.appendChild(condition);
    tempStuff.appendChild(div2);
    tempStuff.appendChild(temp);
    infoRow.appendChild(tempStuff);
    div.appendChild(infoRow);
    div.appendChild(gif);
    main.appendChild(div);
  };
}

export const currentForecastCreator = async (current, location) => {
  const {
    temp_c,
    temp_f,
    condition: { text: cText, icon: cUrl },
    last_updated,
  } = current;
  let currentCond;
  cText === "Partly cloudy" ? (currentCond = "Cloudy") : (currentCond = cText);
  const gif = await getGif(currentCond);
  const gifUrl = gif.data.images.original.url;
  const currentWeather = new CurrentForecast(
    temp_c,
    temp_f,
    cText,
    cUrl,
    gifUrl,
    last_updated,
    location
  );
  currentWeather.appendThis();
};
