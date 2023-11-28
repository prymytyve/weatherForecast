export const getWeather = async (location) => {
  try {
    const weatherFetch = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=${location}&days=3`,
      { mode: "cors" }
    );
    const weatherData = await weatherFetch.json();
    if ("error" in weatherData) throw new Error(weatherData.error.message); //only way to catch bad requests
    //console.log(weatherData);
    return weatherData;
  } catch (err) {
    alert(`${location} could not be found`);
    const weatherFetch = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=auto:ip&days=3",
      { mode: "cors" }
    );
    const weatherData = await weatherFetch.json();
    //console.log(weatherData);
    return weatherData;
  }
};
