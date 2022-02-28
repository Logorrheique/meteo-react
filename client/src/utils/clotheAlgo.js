const { metricsAlgo } = require('./metricsAlgo.js');

const clotheAlgo = weatherCardTab => {
    if (weatherCardTab == undefined) {
        let averageTemp, averageWind, averageHumidity;
        averageTemp =
            weatherCardTab.reduce((acc, curr) => acc + parseInt(curr.main.temp), 0) /
            weatherCardTab.length.toFixed(2);
        averageWind =
            weatherCardTab.reduce((acc, curr) => acc + parseInt(curr.wind.speed), 0) /
            weatherCardTab.length.toFixed(2);
        averageHumidity =
            weatherCardTab.reduce((acc, curr) => acc + parseInt(curr.main.humidity), 0) /
            weatherCardTab.length.toFixed(2);
        return metricsAlgo(averageTemp, averageWind, averageHumidity);
    } else {
        console.log('passe');
    }
};
export { clotheAlgo };
