const { kelvinToCelsius } = require('../utils/kelvinToCelsius');
const axios = require('axios');
require('dotenv').config();

const getWeather = (req, res) => {
    const city = req.params.city;
    let weatherData = {};

    axios
        .get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
        )
        .then(response => {
            weatherData = {
                name: response.data.name,
                weather: {
                    main: response.data.weather[0].main
                },
                main: {
                    temp: kelvinToCelsius(response.data.main.temp).toFixed(2),
                    feels_like: kelvinToCelsius(response.data.main.feels_like).toFixed(2),
                    temp_min: kelvinToCelsius(response.data.main.temp_min).toFixed(2),
                    temp_max: kelvinToCelsius(response.data.main.temp_max).toFixed(2),
                    humidity: response.data.main.humidity
                },
                wind: {
                    speed: response.data.wind.speed
                }
            };
            res.status(200).json(weatherData);
        })
        .catch(err => {
            res.status(404).send(err);
            console.log(err);
        });
};
module.exports = getWeather;
