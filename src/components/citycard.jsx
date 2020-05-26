import React, { useState } from "react";
import "./citycard.css";
import { useEffect } from "react";
import Clock from "../assets/cities/clock";

const CityCard = ({ weather }) => {
  const city = weather.name.toLowerCase();
  const cityCheck = ["london", "rome", "paris", "italy"];
  const [index, setIndex] = useState(1);
  const imageUrl = `bg-${index}.jpeg`;
  const [imgUrl, setImgUrl] = useState(imageUrl);

  useEffect(() => {
    if (index >= 5) {
      setIndex(1);
    }
    setImgUrl(`bg-${index}.jpeg`);
  }, [index]);

  return (
    <div className="citycard-container">
      {cityCheck.indexOf(city) !== -1 ? (
        <img
          className="fade"
          src={require(`../assets/cities/${city}-${imgUrl}`)}
          alt="city"
          onLoad={() => {
            setTimeout(() => {
              let i = index + 1;
              setIndex(i);
            }, 3000);
          }}
        />
      ) : (
        ""
      )}

      <div className="clock-container">
        <Clock />
      </div>
    </div>
  );
};

export default CityCard;
