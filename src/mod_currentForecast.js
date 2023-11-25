class CurrentForecast {
  constructor(a, b, c, d) {
    this._tempC = a;
    this._tempF = b;
    this._condition = c;
    this._icon = d;
  }
}

export const currentForecastCreator = (current) => {
  const {
    temp_c,
    temp_f,
    condition: { text: cText, icon: cUrl },
  } = current;
  const currentWeather = new CurrentForecast(temp_c, temp_f, cText, cUrl);
  return currentWeather;
};
