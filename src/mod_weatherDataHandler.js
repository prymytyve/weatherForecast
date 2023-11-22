class WeatherBlock {
  constructor(a, b, c, d, e) {
    this._tempC = a;
    this._tempF = b;
    this._condition = c;
    this._icon = d;
    this._time = e;
  }
}

class TodayWeatherBlock extends WeatherBlock {
  constructor(a, b, c, d, e) {
    super(a, b, c, d, e);
  }
}

export const weatherObjCreator = (today, forecast) => {
  const {
    temp_c,
    temp_f,
    condition: { text: cText, icon: cUrl },
    last_updated,
  } = today;
  const todayForecast = new TodayWeatherBlock(
    temp_c,
    temp_f,
    cText,
    cUrl,
    last_updated
  );
  console.log(todayForecast);
  forecast.forEach((item) => {
    if (item !== forecast[0]) {
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
    }
  });
};
