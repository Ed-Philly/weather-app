import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-resource">
        <a href="https://openweathermap.org">OpenWeather Api</a>
        <a href="https://unsplash.com">Unsplash</a>
        <a href="https://erikflowers.github.io/weather-icons/">Weather Icons</a>
        <a href="#" className="fa fa-linkedin"></a>
        <span>Eddy edok React weather app</span>
      </div>
    </div>
  );
};

export default Footer;
