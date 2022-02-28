import BoxBonus from './Box/BoxBonus';
import StuffBox from './Box/StuffBox';
import HeaderStuff from './Box/HeaderStuff';
import '../../style/weatherStuff/weatherStuff.css';
const WeatherStuff = () => {
    return (
        <div className="WeatherStuff">
            <HeaderStuff></HeaderStuff>
            <StuffBox></StuffBox>
            <BoxBonus></BoxBonus>
        </div>
    );
};
export default WeatherStuff;
