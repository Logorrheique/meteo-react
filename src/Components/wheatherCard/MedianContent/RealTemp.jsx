const tempImg = require('../../../img/thermometre.svg');
const Temp = ({ temp }) => {
    return (
        <div>
            <img src={tempImg} alt="" />
            <h6>{temp}C°</h6>
        </div>
    );
};
export default Temp;
