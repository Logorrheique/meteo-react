import FeelTemp from './FeelTemp';
import Temp from './RealTemp';
import './../../../style/medianContent.css';
const MedianContent = ({ temp, feelTemp }) => {
    return (
        <div className="medianContent">
            <Temp temp={temp} imgTemp={'http://localhost:3000/img/wheather.png'}></Temp>
            <FeelTemp FeelTemp={feelTemp} imgFeel={'http://localhost:3000/img/user.svg'}></FeelTemp>
        </div>
    );
};
export default MedianContent;
