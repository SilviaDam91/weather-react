import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="forecast" id="forecast">
      <div ClassName="row">
        <div className="col">
          <div className="dayForecast">Mon</div>
          <WeatherIcon code="01d" size={36} />
          <div className="dailyTempForecast">
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
