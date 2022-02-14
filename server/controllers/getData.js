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
                    temp: response.data.main.temp,
                    feels_like: response.data.main.feels_like,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
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
