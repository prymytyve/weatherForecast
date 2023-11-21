export const getWeather = async (location) => {
  try {
    const weatherFetch = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=07c5f71571d64307b4f53832231511&q=${location}`,
      { mode: "cors" }
    );
    const weatherData = await weatherFetch.json();
    if ("error" in weatherData) throw new Error(weatherData.error.message); //only way to catch bad requests
    console.log(weatherData);
  } catch (err) {
    console.log(err);
  }
};
