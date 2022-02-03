const tempImg = require('../../../img/thermometre.svg');
const Temp = ({ temp, imgTemp }) => {
    return (
        <div>
            <img src={imgTemp} alt="" />
            <h6>{temp}C°</h6>
        </div>
    );
};
export default Temp;
