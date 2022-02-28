import BottomContent from './BottomContent/BottomContent';
import MedianContent from './MedianContent/MedianContent';
import TopContent from './TopContent/TopContent';
import OnOff from './OnOff/OnOff';
import accept from '../../img/onOff_Icon/accept.svg';
import React, { useState } from 'react';

import './../../style/weather.css';
const WeatherCard = ({ weatherObject }) => {
    const [state, setHandle] = useState(0);
    const handleCard = () => {
        state == 0 ? setHandle(accept) : setHandle(0);
    };
    return (
        <>
            <div className="weatherCard" onClick={handleCard}>
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
                <OnOff img={state}></OnOff>
            </div>
        </>
    );
};
export default WeatherCard;
