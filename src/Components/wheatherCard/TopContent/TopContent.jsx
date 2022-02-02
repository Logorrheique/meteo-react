import WheaterState from './wheatherState';
import './../../../style/topContent.css';
const TopContent = ({ wheather, wheatherImg }) => {
    return (
        <div className="topContent">
            <WheaterState state={wheather} description={wheatherImg}></WheaterState>
        </div>
    );
};
export default TopContent;
