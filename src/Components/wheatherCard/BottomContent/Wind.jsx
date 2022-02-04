const Wind = ({ windspeed, StrengthImg }) => {
  return (
    <div className="wind">
      <img src={StrengthImg} alt="" />
      <p>{windspeed}km/h</p>
    </div>
  );
};
export default Wind;
