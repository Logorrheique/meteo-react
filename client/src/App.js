import WeatherCard from './Components/weatherCard/Weather';
import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
const axios = require('axios');
function App() {
    const tab = [];
    const getValue = () => {
        const city = document.getElementById('in').value;
        axios
            .get(`http://localhost:3001/api/${city}`)
            .then(res => {
                console.log(res.data);
                tab.push(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Meteo-React</h1>
                <input id="in"></input>
                <button type="button" onClick={getValue}>
                    Récupérer la valeur
                </button>
            </div>
            <div className="main-content">
                {tab.map(e => {
                    console.log(e);
                    <WeatherCard weatherObject={e}></WeatherCard>;
                })}
            </div>
        </div>
    );
}

export default App;
