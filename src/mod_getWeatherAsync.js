export const getWeather = async (location) => {
  await location;
  try {
    const start = Date.now();
    const weatherFetch = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=${location}&days=3`,
      { mode: "cors" }
    );
    const getTime = (Date.now() - start) / 1000;
    const weatherData = await weatherFetch.json();
    if ("error" in weatherData) throw new Error(weatherData.error.message); //only way to catch bad requests
    //console.log(weatherData);
    return [weatherData, getTime];
  } catch (err) {
    let loc;
    location === "auto:ip" ? (loc = "Weather Data") : (loc = location);
    alert(`${loc} could not be found. Try again`);
    console.log(err.message);
    const start = Date.now();
    const weatherFetch = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=auto:ip&days=3",
      { mode: "cors" }
    );
    const getTime = (Date.now() - start) / 1000;
    const weatherData = await weatherFetch.json();
    return [weatherData, getTime];
  }
};
