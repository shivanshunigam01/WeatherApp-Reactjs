import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/shivanshunigam01/WeatherApp-Reactjs">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/shivanshunigam01/WeatherApp-Reactjs">
          Shivanshu Nigam
        </a>{" "}
       
      </div>
    </React.Fragment>
  );
}

export default App;
