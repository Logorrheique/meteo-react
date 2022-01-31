const WheaterState = ({ state, description }) => {
  return (
    <div>
      <h5>Etat : {state}</h5>
      <h5>Description : {description}</h5>
    </div>
  );
};
export default WheaterState;
