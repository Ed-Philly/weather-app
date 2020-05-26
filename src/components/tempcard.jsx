import React from "react";
import "./tempcard.css";

const TempCard = ({ weather, date }) => {
  return (
    <div className="tempcard-container">
      <div className="location-box">
        <div className="location">
          {weather.name},{weather.sys.country}
        </div>
        <div className="date">{date}</div>
      </div>

      <div className="weather-box">
        <div className="weather">{weather.weather[0].description}</div>
        <div className="temp">
          {Math.round(weather.main.temp)}
          <span className="celsius">&#8451; | &#8457;</span>
          <i
            className={`wi wi-owm-${weather.weather[0].id}`}
            style={{
              color: "#8860d0",
              fontSize: "68px",
              fontWeight: "900",
              marginLeft: "10px",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TempCard;
