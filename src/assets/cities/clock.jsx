import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(90);
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    function clock() {
      const date = new Date();

      const hours = ((date.getHours() + 11) % 12) + 1;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      setHour(hour);
      setMinute(minute);
      setSeconds(second);
    }
    setInterval(clock, 1000);
  }, [second]);

  const transformH = {
    transform: `rotate(${hour}deg)`,
  };
  const transformM = {
    transform: `rotate(${minute}deg)`,
  };
  const transformS = {
    transform: `rotate(${second}deg)`,
  };

  return (
    <div className="clock">
      <div className="wrap">
        <span className="hour" style={transformH}></span>
        <span className="minute" style={transformM}></span>
        <span className="second" style={transformS}></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Clock;
