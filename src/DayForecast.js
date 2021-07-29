import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function DayForecast(props) {
  console.log(props);

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="dayForecast">
      <div className="dayForecast">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />

      <div className="dailyTempForecast">
        <span className="max-temp">{maxTemperature}</span>
        <span className="min-temp">{minTemperature}</span>
      </div>
    </div>
  );
}
