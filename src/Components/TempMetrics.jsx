const TempMetrics = ({ temp, tempFeel, tempMin, tempMax }) => {
  return (
    <div>
      <h5>temperature actuel {temp}</h5>
      <h5>temperature ressentie {tempFeel}</h5>
      <div>
        <h5>Temperature minimum d'aujourd'hui{tempMin}</h5>
        <h5>Temperature maximum d'aujourd'hui{tempMax}</h5>
      </div>
    </div>
  );
};
export default TempMetrics;
