import BottomContent from "./BottomContent/BottomContent";
import MedianContent from "./MedianContent/MedianContent";
import TopContent from "./TopContent/TopContent";
import "./../../style/wheather.css";
const WheatherCard = ({ objecte }) => {
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
    <>
      <div className="wheatherCard">
        <TopContent
          wheather={object.wheather}
          wheatherImg={object.wheatherImg}
        ></TopContent>
        <MedianContent
          temp={object.temp}
          feelTemp={object.tempFeelLike}
        ></MedianContent>
        <BottomContent
          windspeed={object.windspeed}
          StrengthImg={object.winImg}
          tempMin={object.tempMin}
          tempMax={object.tempMax}
          humidity={object.hum}
          cityName={object.nameCity}
        ></BottomContent>
      </div>
    </>
  );
};
export default WheatherCard;
