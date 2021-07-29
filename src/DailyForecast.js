import React, { useState } from "react";
import axios from "axios";
import "./DailyForecast.css";
import DayForecast from "./DayForecast.js";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast" id="forecast">
        <div className="row">
          <div className="col">
            <DayForecast data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "968e9119f2237b959ae20b2dab5f8100";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
