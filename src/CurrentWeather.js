import React from "react";

export default function CurrentWeather() {
  let weatherData = {
    city: " Amsterdam",
    date: "Saturday 11:18,",
    temperature: "16",
    description: "light intensity drizzle",
    humidity: "88",
    wind: "3.13",
  };
  return (
    <ul className="todayWeather">
      <li> {weatherData.date + weatherData.city}</li>

      <li className="current-temperature">
        <span>☀️</span>
        <br />
        <span className="now-temperature">{weatherData.temperature}</span>
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
  );
}
