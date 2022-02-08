import BottomContent from "./BottomContent/BottomContent";
import MedianContent from "./MedianContent/MedianContent";
import TopContent from "./TopContent/TopContent";
import "./../../style/weather.css";
const WeatherCard = ({ weatherObject }) => {
  return (
    <>
      <div className="weatherCard">
        <TopContent
          weather={weatherObject.weather}
          weatherImg={weatherObject.weatherImg}
        ></TopContent>
        <MedianContent
          temp={weatherObject.temp}
          feelTemp={weatherObject.tempFeelLike}
        ></MedianContent>
        <BottomContent
          windspeed={weatherObject.windspeed}
          StrengthImg={weatherObject.winImg}
          tempMin={weatherObject.tempMin}
          tempMax={weatherObject.tempMax}
          humidity={weatherObject.hum}
          cityName={weatherObject.nameCity}
        ></BottomContent>
      </div>
    </>
  );
};
export default WeatherCard;
