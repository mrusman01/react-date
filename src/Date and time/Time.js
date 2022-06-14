import React, { useState } from "react";

const Time = () => {
  const date = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(date);
  const update = () => {
    let newTime = new Date().toLocaleTimeString();
    settime(newTime);
  };
  return (
    <div className="box-1">
      <h1>{ctime}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
};
export default Time;
