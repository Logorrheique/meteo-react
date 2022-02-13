import WeatherCard from './Components/weatherCard/Weather';
import './App.css';
import Header from './Components/Header';
import React, { useState, useRef } from 'react';
const axios = require('axios');

function App() {
    const inputEl = useRef(null);
    const [card, setCard] = useState([]);
    const getValue = () => {
        const city = inputEl.current.value;
        axios
            .get(`http://localhost:3001/api/${city}`)
            .then(res => {
                setCard([...card, res.data]);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="App">
            <div className="header">
                <h1>Meteo-React</h1>
                <input ref={inputEl}></input>
                <button type="button" onClick={getValue}>
                    Mathis
                </button>
            </div>
            <div className="main-content">
                {card.map(e => (
                    <WeatherCard weatherObject={e} key={e.name}></WeatherCard>
                ))}
            </div>
        </div>
    );
}

export default App;
