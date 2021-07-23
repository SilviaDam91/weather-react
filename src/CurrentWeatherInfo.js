import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";

export default function CurrentWeatherInfo(props) {
  return (
    <ul className="todayWeather">
      <li>{props.info.city}</li>

      <li>
        <FormattedDate date={props.info.date} />
      </li>

      <li className="current-temperature">
        <span>☀️</span>
        <br />
        <span className="now-temperature">
          {Math.round(props.info.temperature)}
        </span>
        <a href="celsiusLink" className="celsius-link">
          °C
        </a>
        <span className="temperature-bar">|</span>
        <a href="fahrenheitLink" className="fahrenheit-link">
          °F
        </a>
      </li>
      <li>Currently we have {props.info.description}</li>
      <li>Wind: {props.info.humidity}km/h</li>
      <li>Humidity: {props.info.wind}%</li>
    </ul>
  );
}
