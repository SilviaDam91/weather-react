import axios from "axios";
import React from "react";
////import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "968e9119f2237b959ae20b2dab5f8100";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return <h1>Ciaoooo</h1>;
}
