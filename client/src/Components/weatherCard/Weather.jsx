import BottomContent from './BottomContent/BottomContent';
import MedianContent from './MedianContent/MedianContent';
import TopContent from './TopContent/TopContent';
import ContextCard from '../ContextCard';
import React, { useContext } from 'react';

import './../../style/weather.css';
const WeatherCard = ({ weatherObject }) => {
    const { card, setCard } = useContext(ContextCard);
    const handleCard = () => setCard(card.filter(e => e.name != weatherObject.name));
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
            </div>
        </>
    );
};
export default WeatherCard;
