const FeelTemp = ({ tempFeel, imgFeel }) => {
    return (
        <div>
            <img src={imgFeel} alt="" />
            <h6>{tempFeel}C°</h6>
        </div>
    );
};
export default FeelTemp;
