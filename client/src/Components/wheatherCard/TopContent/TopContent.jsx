import WheaterState from "./wheatherState";
import "./../../../style/topContent.css";
import stateImg from "../../../img/sun.svg";
const TopContent = ({ wheather, wheatherImg }) => {
  return (
    <div className="topContent">
      <WheaterState state={wheather} img={stateImg}></WheaterState>
    </div>
  );
};
export default TopContent;
