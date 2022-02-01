import WheatherCard from "./Components/wheatherCard/Wheather";
import "./App.css";
import Header from "./Components/Header";

const test = {
  name: "Mountain View",
  coords: {
    lon: -122.08,
    lat: 37.39,
  },
  wheather: {
    main: "Clear",
    description: "clear sky",
  },
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100,
  },
  wind: {
    speed: 1.5,
  },
};

function App() {
  console.log("heyy");
  return (
    <div className="App">
      <WheatherCard wheatherObject={test}></WheatherCard>
    </div>
  );
}

export default App;
