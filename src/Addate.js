import React, { useState, useEffect } from "react";
const Addate = () => {
  let time = new Date().toLocaleString();
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setTime(time);
    }, 1000);
  });
  return (
    <div>
      <div className="clock-container">
        <h3 className="digitalClock">digital clock</h3>
        <div className="time-container">{cTime}</div>
      </div>
    </div>
  );
};

export default Addate;