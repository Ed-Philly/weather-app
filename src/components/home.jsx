import React, { useState } from "react";
import "../assets/styles/css/weather-icons.css";
import HeaderBar from "./header";
import SearchBar from "./searchbar";
import TempCard from "./tempcard";
import Footer from "./footer";
import TempCardTwo from "./tempcard-2";
import CityCard from "./citycard";
import { formatDate } from "./utilities";
import WeekTempCard from "./weektempcard";

const api = {
  key: "f392c3531aaf60a86d993059404b7fae",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.main) {
            setWeather(data);
            setQuery("");
            setErrorMsg("");
          } else {
            setWeather("");
            setQuery("");
            data.cod === "404"
              ? setErrorMsg(data.message)
              : setErrorMsg(
                  "plase enter location e.g london or town e.g barking"
                );
          }
        });
    }
  };

  return (
    <div className="app">
      <main>
        <SearchBar
          onChange={(e) => setQuery(e.target.value)}
          searchString={query}
          onEnter={search}
        />
        {errorMsg ? <div className="error-message">{errorMsg}</div> : ""}

        {typeof weather.main != "undefined" ? (
          <div className="dashboard-top-level-container">
            <TempCard weather={weather} date={formatDate(new Date())} />
            <CityCard weather={weather} />
            <TempCardTwo weather={weather} />
          </div>
        ) : (
          ""
        )}
        <div className="dashboard-bottom-level-container">
          {weather.name ? <WeekTempCard api={api} query={query} /> : ""}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
