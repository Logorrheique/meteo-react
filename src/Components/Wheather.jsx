const test = {
  city: Paris,
  coords: { lon: 1, lat: 1 },
  weather: {
    main: "Clear",
    description: "clear sky",
  },
  metricsTemp: {
    temp: 1,
    tempFeel: 1,
    tempMin: -1,
    tempMax: 1,
  },
  windSpeed: 1,
  hum: 20,
  sunMetrics: {
    sunrise: 00000,
    sunset: 11111,
  },
};
import Coords from "./Coords";
import WheaterState from "./wheatherState";
import TempMetrics from "./TempMetrics";
import WindMetrics from "./windMetrics";
const Wheater = ({ wheatherCard }) => {
  return (
    <div className="wheater">
      <h1 className="cityName">{wheatherCard.name}</h1>
      <Coords
        lon={wheatherCard.coords.lon}
        lat={wheatherCard.coords.lat}
      ></Coords>
      <WheaterState
        className="wheatherState"
        state={wheatherCard.wheather.main}
        description={wheatherCard.wheather.description}
      ></WheaterState>
      <TempMetrics
        temp={wheatherCard.main.temp}
        tempFeel={wheatherCard.main.feel_like}
        tempMin={wheatherCard.main.temp_min}
        tempMax={wheatherCard.main.temp_max}
      ></TempMetrics>
      <WindMetrics windSpeed={wheatherCard.wind.speed}></WindMetrics>
    </div>
  );
};
