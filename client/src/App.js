import WeatherCard from "./Components/weatherCard/Weather";
import "./App.css";
import Header from "./Components/Header";

function App() {
  console.log("heyy");
  const object = {
    wheather: "Clair",
    temp: 15,
    tempFeelLike: 1,
    windspeed: 15,
    tempMin: -1,
    tempMax: 2,
    hum: 20,
    nameCity: "Paris",
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Meteo-React</h1>
      </div>
      <div className="main-content">
        <WeatherCard weatherObject={object}></WeatherCard>
        <WeatherCard weatherObject={object}></WeatherCard>
      </div>
    </div>
  );
}

export default App;
