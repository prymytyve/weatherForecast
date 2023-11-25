import { getGif } from "./mod_getGiphyAsync";
const main = document.querySelector(".forecastRow");
class CurrentForecast {
  constructor(a, b, c, d, e) {
    this._tempC = a;
    this._tempF = b;
    this._condition = c;
    this._icon = d;
    this._gifUrl = e;
  }

  appendThis = () => {
    const div = document.createElement("div");
    div.classList.add("container", "current");
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
    div.appendChild(temp);
    div.appendChild(condition);
    div.appendChild(img);
    div.appendChild(gif);
    main.appendChild(div);
  };
}

export const currentForecastCreator = async (current) => {
  const {
    temp_c,
    temp_f,
    condition: { text: cText, icon: cUrl },
  } = current;
  const gif = await getGif(cText);
  const gifUrl = gif.data.images.original.url;
  const currentWeather = new CurrentForecast(
    temp_c,
    temp_f,
    cText,
    cUrl,
    gifUrl
  );
  currentWeather.appendThis();
};
