import FeelTemp from "./FeelTemp";
import Temp from "./RealTemp";
import "./../../../style/medianContent.css";
import tempImg from "../../../img/thermometre.svg";
import tempFeel from "../../../img/user.svg";
const MedianContent = ({ temp, feelTemp }) => {
  return (
    <div className="medianContent">
      <Temp temp={temp} imgTemp={tempImg}></Temp>
      <FeelTemp FeelTemp={feelTemp} imgFeel={tempFeel}></FeelTemp>
    </div>
  );
};
export default MedianContent;
