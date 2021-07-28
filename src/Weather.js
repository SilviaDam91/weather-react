import React, { useState } from "react";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";
import Footer from "./Footer.js";
import Season from "./images/season.svg";
import axios from "axios";
import CurrentWeatherInfo from "./CurrentWeatherInfo.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "968e9119f2237b959ae20b2dab5f8100";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityTyped(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weatherContainer">
        <CurrentWeatherInfo info={weatherData} />
        <div className="search_header">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a city"
              autoFocus="on"
              autoComplete="off"
              onChange={handleCityTyped}
            />

            <input type="submit" value="Search " className="search_buttom" />
          </form>

          <button className="search-currentPositionWeather">
            Current weather
          </button>
        </div>

        <HourlyForecast />

        <img src={Season} alt="season" width="20%" className="clock" />

        <br />

        <DailyForecast />

        <Footer />
      </div>
    );
  } else {
  }
  search();
  return "Loading...";
}
