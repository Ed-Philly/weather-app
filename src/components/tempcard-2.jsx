import React from "react";
import "./tempcard-2.css";

const TempCardTwo = ({ weather }) => {
  const { main, wind } = weather;
  return (
    <div className="tempcard-two-container">
      <div className="label-container">
        <span className="label">humidity :</span>
        <span>{`${main.humidity}%`}</span>
      </div>
      <div className="label-container">
        <span className="label"> max temp:</span>
        <span>{`${main.temp_max}`}</span>
      </div>
      <div className="label-container">
        <span className="label"> min temp:</span>
        <span>{`${main.temp_min}`}</span>
      </div>
      <div className="label-container">
        <span className="label"> wind:</span>
        <span>{`${wind.speed}mph`}</span>
      </div>

      <div className="btn-wrapper">
        <button>temperature</button>
        <button>humidity</button>
        <button>wind</button>
      </div>
    </div>
  );
};

export default TempCardTwo;
