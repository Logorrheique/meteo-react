const express = require('express');
const favicon = require('express-favicon');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.get('/api/:city', (req, res) => {
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
                    temp: (response.data.main.temp - 273.15).toFixed(2),
                    feels_like: (response.data.main.feels_like - 273.15).toFixed(2),
                    temp_min: (response.data.main.temp_min - 273.15).toFixed(2),
                    temp_max: (response.data.main.temp_max - 273.15).toFixed(2),
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
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
