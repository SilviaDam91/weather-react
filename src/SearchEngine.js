import React from "react";
export default function SearchEngine() {
  return (
    <div className="search_header">
      <form>
        <input
          type="search"
          placeholder="Search for a city"
          autoFocus="on"
          autoComplete="off"
        />

        <input type="submit" value="Search " className="search_buttom" />
      </form>

      <button className="search-currentPositionWeather">Current weather</button>
    </div>
  );
}
