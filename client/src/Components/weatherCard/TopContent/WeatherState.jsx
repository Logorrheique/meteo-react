const WeatherState = ({ state, img }) => {
    return (
        <>
            <p>{state}</p>
            <img className="imgWeatherState" src={img} alt=""></img>
        </>
    );
};
export default WeatherState;
