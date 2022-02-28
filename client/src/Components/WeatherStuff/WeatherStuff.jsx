import Box from './Box/Box';
import BoxBonus from './Box/BoxBonus';
import '../../style/weatherStuff/weatherStuff.css';
const WeatherStuff = () => {
    return (
        <div className="WeatherStuff">
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            {/* <BoxBonus></BoxBonus> */}
        </div>
    );
};
export default WeatherStuff;
