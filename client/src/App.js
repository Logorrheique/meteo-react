import WeatherCard from "./Components/weatherCard/Weather";
import "./App.css";
import Header from "./Components/Header";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState([]);
  return (
    <div className="App">
      <div className="header">
        <h1>Meteo-React</h1>
      </div>
      <div className="main-content">
        {object.map((e) => (
          <WeatherCard weatherObject={e}></WeatherCard>
        ))}
      </div>
    </div>
  );
}

export default App;
