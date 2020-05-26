import React, { useState, useEffect } from "react";
import "./weektemp.css";
import { formatDateToDay } from "./utilities";

const WeekTempCard = ({ api, query }) => {
  const [tempdata, setData] = useState("");

  useEffect(() => {
    fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="week-card-container">
      {tempdata ? (
        tempdata.list.map((value, key) => (
          <div className="week-card" key={key}>
            <div className="date">{formatDateToDay(value.dt_txt)}</div>
            <div className="description">{value.weather[0].description}</div>
            <div className="temp">
              Temp : <span className="look-temp">{value.main.temp}</span>
            </div>
            <div className="temp">Max_temp : {value.main.temp_max}</div>
            <div className="temp">Min_temp : {value.main.temp_min}</div>
            <div className="temp">Feels like : {value.main.feels_like}</div>
            <div className="temp">Humidity : {value.main.humidity}</div>
          </div>
        ))
      ) : (
        <div>Loading .... Loading ....</div>
      )}
    </div>
  );
};

export default WeekTempCard;
