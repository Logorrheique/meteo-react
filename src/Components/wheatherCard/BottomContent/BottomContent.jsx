import City from './City';
import TempMinMax from './TempMinMax';
import Wind from './Wind';
import './../../../style/bottomContent.css';
const BottomContent = ({ windspeed, StrengthImg, tempMin, tempMax, humidity, cityName }) => {
    return (
        <div className="bottomContent">
            <Wind windspeed={windspeed} StrengthImg={StrengthImg}></Wind>
            <TempMinMax min={tempMin} max={tempMax} hum={humidity}></TempMinMax>
            <City city={cityName}></City>
        </div>
    );
};
export default BottomContent;
