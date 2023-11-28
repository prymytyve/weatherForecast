import format from "date-fns/format";
import formatRelative from "date-fns/formatRelative";
import parseISO from "date-fns/parseISO";
const main = document.querySelector(".forecastRow");
export class WeatherBlock {
  constructor(c, d, e, a1, a2, b1, b2) {
    // this._tempC = a;
    // this._tempF = b;
    this._condition = c;
    this._icon = d;
    this._time = e;
    this._day = this.formattedTime(e);
    this._maxTempC = a1;
    this._minTempC = a2;
    this._maxTempF = b1;
    this._minTempF = b2;
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
    // const tC = "H: " + this._maxTempC + "° / " + "L: " + this._minTempC + "°";
    // const tF = "H: " + this._maxTempF + "° / " + "L: " + this._minTempF + "°";
    const tC = this._maxTempC + "° / " + this._minTempC + "°";
    const tF = this._maxTempF + "° / " + this._minTempF + "°";
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
    const div2 = document.createElement("div");
    div2.classList.add("iconAndCond");
    div2.appendChild(img);
    div2.appendChild(condition);
    div.appendChild(div2);
    main.appendChild(div);
  };
}

export const weatherObjCreator = (forecast) => {
  // console.log(forecast);
  forecast.forEach((item) => {
    const date = item.date;
    const {
      condition: { text: cText, icon: cUrl },
      maxtemp_c,
      mintemp_c,
      maxtemp_f,
      mintemp_f,
    } = item.day;
    const upcomingForecast = new WeatherBlock(
      cText,
      cUrl,
      date,
      maxtemp_c,
      mintemp_c,
      maxtemp_f,
      mintemp_f
    );
    // console.log(upcomingForecast);
    upcomingForecast.appendThis();
  });
};
