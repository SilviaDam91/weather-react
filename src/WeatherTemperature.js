import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showfahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span className="now-temperature">{Math.round(props.celsius)}</span>
        <span className="celsius-link">°C</span>
        <span className="temperature-bar">|{""}</span>
        <a href="/" className="fahrenheit-link" onClick={showfahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <span className="now-temperature">{Math.round(fahrenheit)}</span>
        <a href="/" className="celsius-link" onClick={showCelsius}>
          °C
        </a>
        <span className="temperature-bar">|{""}</span>
        <span className="fahrenheit-link">°F</span>
      </div>
    );
  }
}
