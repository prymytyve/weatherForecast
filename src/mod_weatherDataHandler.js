import format from "date-fns/format";
import formatRelative from "date-fns/formatRelative";
import parseISO from "date-fns/parseISO";
const main = document.querySelector(".mainContent");
export class WeatherBlock {
  constructor(a, b, c, d, e) {
    this._tempC = a;
    this._tempF = b;
    this._condition = c;
    this._icon = d;
    this._time = e;
    this._day = this.formattedTime(e);
  }

  get day() {
    return this._day;
  }

  formattedTime = (a) => {
    const today = new Date();
    const thisDate = new Date(a + "T00:00"); //T00:00 added to create object in local time
    let timeString = formatRelative(thisDate, today);
    const formattedTimeString = timeString.split(" ").shift();
    return formattedTimeString;
  };

  appendThis = () => {
    const div = document.createElement("div");
    div.classList.add("container", this.day);
    const time = document.createElement("p");
    time.textContent = this.day;
    const temp = document.createElement("p");
    temp.classList.add("temp");
    const tempUnitCheck = document.querySelector("#tempUnit");
    let tempChoice; //display temp in celsius is checkbox is checked, else displays in fahrenheit (default)
    const tC = this._tempC + " °C";
    const tF = this._tempF + " °F";
    tempUnitCheck.checked === true ? (tempChoice = tC) : (tempChoice = tF);
    temp.textContent = tempChoice;
    temp.setAttribute("tempC", `${tC}`);
    temp.setAttribute("tempF", `${tF}`);
    const condition = document.createElement("p");
    condition.textContent = this._condition;
    const img = new Image();
    img.src = this._icon;
    div.appendChild(time);
    div.appendChild(temp);
    div.appendChild(condition);
    div.appendChild(img);
    main.appendChild(div);
  };

  changeUnit = (bool) => {
    const temp = document.querySelector(`.${this.day} .temp`);
    let tempChoice; //display temp in celsius is checkbox is checked, else displays in fahrenheit (default)
    bool === true
      ? (tempChoice = this._tempC + " °C")
      : (tempChoice = this._tempF + " °F");
    temp.textContent = tempChoice;
  };
}

export const weatherObjCreator = (forecast) => {
  console.log(forecast);
  forecast.forEach((item) => {
    const date = item.date;
    const {
      avgtemp_c,
      avgtemp_f,
      condition: { text: cText, icon: cUrl },
    } = item.day;
    const upcomingForecast = new WeatherBlock(
      avgtemp_c,
      avgtemp_f,
      cText,
      cUrl,
      date
    );
    console.log(upcomingForecast);
    upcomingForecast.appendThis();
  });
};
