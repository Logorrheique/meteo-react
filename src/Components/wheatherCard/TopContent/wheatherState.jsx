const WheaterState = ({ state, description }) => {
    return (
        <div className="wheatherState">
            <p>{state}</p>
            <img src="{description}" alt="">
                {description}
            </img>
        </div>
    );
};
export default WheaterState;
