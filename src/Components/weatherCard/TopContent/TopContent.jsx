import WeatherState from './WeatherState';
import './../../../style/topContent.css';
import stateImg from '../../../img/sun.svg';

const TopContent = ({ weather, weatherImg }) => {
    return (
        <>
            <div className="topContent">
                <WeatherState state={weather} img={stateImg}></WeatherState>
            </div>
        </>
    );
};
export default TopContent;
