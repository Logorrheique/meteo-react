import WeatherCard from './Components/weatherCard/Weather';
import WeatherStuff from './Components/WeatherStuff/WeatherStuff';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css';
import React, { useState, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Context from './Components/ContextCard';
const axios = require('axios');
const { clotheAlgo } = require('./utils/clotheAlgo.js');
function App() {
    let stuff = {};
    const inputEl = useRef(null);
    const [card, setCard] = useState([]);
    const getValue = () => {
        const city = inputEl.current.value;
        axios
            .get(`http://localhost:3001/api/${city}`)
            .then(res => {
                if ([...card].some(e => e.name == res.data.name)) {
                    toast.error('City already found');
                } else {
                    setCard([...card, res.data]);
                    console.log(...card);

                    toast.success(`Display of the time in ${city}`);
                }
            })
            .catch(err => {
                toast.error('City not found');
            });
    };
    if (card.length != 0) {
        stuff = clotheAlgo([...card]);
    }
    const resetCard = () => {
        setCard([]);
        toast.success(`Successfuly reset`);
    };
    const contextCard = {
        card: card,
        setCard: setCard
    };
    return (
        <Context.Provider value={contextCard}>
            <div className="App">
                <Toaster></Toaster>
                <Header></Header>
                <div className="header">
                    <input placeholder="Type a city .." ref={inputEl}></input>
                    <button type="button" onClick={getValue}>
                        Meteo
                    </button>
                    <button type="button" onClick={resetCard}>
                        Reset
                    </button>
                </div>
                <div className="main-content">
                    {card.map(e => (
                        <WeatherCard
                            weatherObject={e}
                            key={e.name}
                            onClick={console.log('Z')}
                        ></WeatherCard>
                    ))}
                </div>
                <WeatherStuff
                    head={stuff.head}
                    topBody={stuff.topBody}
                    lowerBody={stuff.lowerBody}
                    feet={stuff.feet}
                    imgBonus1={stuff.bonus1}
                    imgBonus2={stuff.bonus2}
                    imgBonus3={stuff.bonus3}
                    imgBonus4={stuff.bonus4}
                ></WeatherStuff>
                <Footer></Footer>
            </div>
        </Context.Provider>
    );
}

export default App;
