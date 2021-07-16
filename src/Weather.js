import React from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather.js";
import SearchEngine from "./SearchEngine.js";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";
import Footer from "./Footer.js";
import Season from "./images/season.svg";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {}

  let apiKey = "968e9119f2237b959ae20b2dab5f8100";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherContainer">
      <CurrentWeather />
      <SearchEngine />
      <HourlyForecast />
      <img src={Season} alt="season" width="20%" className="clock" />
      <br />
      <DailyForecast />
      <Footer />
    </div>
  );
}
