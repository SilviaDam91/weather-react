import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";

export default function CurrentWeatherInfo(props) {
  return (
    <ul className="todayWeather">
      <li className="city">{props.info.city}</li>
      <li>
        <FormattedDate date={props.info.date} />
      </li>
      <br />
      <WeatherIcon code={props.info.icon} size={52} />

      <li className="current-temperature">
        <br />
        <WeatherTemperature celsius={props.info.temperature} />
      </li>
      <li>Currently we have {props.info.description}</li>
      <li>Wind: {props.info.humidity}km/h</li>
      <li>Humidity: {props.info.wind}%</li>
    </ul>
  );
}
