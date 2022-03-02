import BottomContent from './BottomContent/BottomContent';
import MedianContent from './MedianContent/MedianContent';
import TopContent from './TopContent/TopContent';
import OnOff from './OnOff/OnOff';

import './../../style/weather.css';
const WeatherCard = ({ weatherObject }) => {
    return (
        <>
            <div className="weatherCard">
                <TopContent
                    weather={weatherObject.weather.main}
                    weatherImg={weatherObject.weatherImg}
                ></TopContent>
                <MedianContent
                    temp={weatherObject.main.temp}
                    feelTemp={weatherObject.main.feels_like}
                ></MedianContent>
                <BottomContent
                    windspeed={weatherObject.wind.speed}
                    tempMin={weatherObject.main.temp_min}
                    tempMax={weatherObject.main.temp_max}
                    humidity={weatherObject.main.humidity}
                    cityName={weatherObject.name}
                ></BottomContent>
                <OnOff city={weatherObject.name}></OnOff>
            </div>
        </>
    );
};
export default WeatherCard;
