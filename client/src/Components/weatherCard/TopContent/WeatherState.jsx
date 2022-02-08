const WeatherState = ({ state, img }) => {
  return (
    <>
      <p>{state}</p>
      <img src={img} alt=""></img>
    </>
  );
};
export default WeatherState;
