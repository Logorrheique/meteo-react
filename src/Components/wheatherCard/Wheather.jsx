import Coords from './Coords';
import WheaterState from './WheatherState';
import TempMetrics from './TempMetrics';
import { Wind, Humidity } from './MoreMetrics';

const WheatherCard = wheatherObject => {
    return (
        <div className="wheater">
            <h1 className="cityName">{wheatherObject.name}</h1>
            {/* <Coords lon={wheatherObject.coords.lon} lat={wheatherObject.coords.lat}></Coords> */}
            <WheaterState
                className="wheatherState"
                state={wheatherObject.wheather.main}
                description={wheatherObject.wheather.description}
            ></WheaterState>
            <TempMetrics
                temp={wheatherObject.main.temp}
                tempFeel={wheatherObject.main.feel_like}
                tempMin={wheatherObject.main.temp_min}
                tempMax={wheatherObject.main.temp_max}
            ></TempMetrics>
            <Wind windSpeed={wheatherObject.wind.speed}></Wind>
            <Humidity windSpeed={wheatherObject.main.humidity}></Humidity>
        </div>
    );
};
export default WheatherCard;
