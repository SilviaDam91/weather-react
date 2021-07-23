import React, { useState } from "react";
import axios from "axios";
import SearchEngine from "./SearchEngine.js";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";
import Footer from "./Footer.js";
import Season from "./images/season.svg";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weatherContainer">
        <ul className="todayWeather">
          <li> Currently in {props.defaultCity}</li>

          <li className="current-temperature">
            <span>☀️</span>
            <br />
            <span className="now-temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <a href="celsiusLink" className="celsius-link">
              °C
            </a>
            <span className="temperature-bar">|</span>
            <a href="fahrenheitLink" className="fahrenheit-link">
              °F
            </a>
          </li>
          <li>Currently we have {weatherData.description}</li>
          <li>Wind: {weatherData.humidity}km/h</li>
          <li>Humidity: {weatherData.wind}%</li>
        </ul>

        <SearchEngine />
        <HourlyForecast />
        <img src={Season} alt="season" width="20%" className="clock" />
        <br />
        <DailyForecast />
        <Footer />
      </div>
    );
  } else {
    const apiKey = "968e9119f2237b959ae20b2dab5f8100";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
