import FeelTemp from './FeelTemp';
import Temp from './RealTemp';
import './../../../style/medianContent.css';
const MedianContent = ({ temp, feelTemp }) => {
    return (
        <div className="medianContent">
            <Temp temp={temp}></Temp>
            <FeelTemp FeelTemp={feelTemp}></FeelTemp>
            <img src="../../../img/sun.svg" alt="" />
        </div>
    );
};
export default MedianContent;
