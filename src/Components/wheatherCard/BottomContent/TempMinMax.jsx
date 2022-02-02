const TempMinMax = ({ min, max, hum }) => {
    return (
        <div className="tempMinMax">
            <p>min :{min}C°</p>
            <p>max :{max}C°</p>
            <p>hum :{hum}%</p>
        </div>
    );
};

export default TempMinMax;
