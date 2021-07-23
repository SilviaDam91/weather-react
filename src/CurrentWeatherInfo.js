import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature.js";
export default function CurrentWeatherInfo(props) {
  return (
    <ul className="todayWeather">
      <li>{props.info.city}</li>

      <li>
        <FormattedDate date={props.info.date} />
      </li>

      <li className="current-temperature">
        <img src={props.info.iconUrl} alt={props.info.description} />
        <br />
        <WeatherTemperature celsius={props.info.temperature} />
      </li>
      <li>Currently we have {props.info.description}</li>
      <li>Wind: {props.info.humidity}km/h</li>
      <li>Humidity: {props.info.wind}%</li>
    </ul>
  );
}
