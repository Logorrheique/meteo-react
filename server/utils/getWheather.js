const axios = require('axios');
const { compile } = require('morgan');
require('dotenv').config();
const getWheather = async city => {
    try {
        return await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
        );
    } catch (error) {
        console.error(error);
    }
};
console.log(getWheather('Paris'));

// export function getWheather();
