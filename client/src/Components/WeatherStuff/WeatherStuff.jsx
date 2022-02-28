import BoxBonus from './Box/BoxBonus';
import StuffBox from './Box/StuffBox';
import HeaderStuff from './Box/HeaderStuff';
import '../../style/weatherStuff/weatherStuff.css';
const props = {};
const WeatherStuff = ({
    head,
    topBody,
    lowerBody,
    feet,
    imgBonus1,
    imgBonus2,
    imgBonus3,
    imgBonus4
}) => {
    return (
        <div className="WeatherStuff">
            <HeaderStuff></HeaderStuff>
            <StuffBox img1={head} img2={topBody} img3={lowerBody} img4={feet}></StuffBox>
            <BoxBonus
                imgB1={imgBonus1}
                imgB2={imgBonus2}
                imgB3={imgBonus3}
                imgB4={imgBonus4}
            ></BoxBonus>
        </div>
    );
};
export default WeatherStuff;
