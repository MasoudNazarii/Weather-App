import React, { useState } from "react";
import { Drop, Wind, SearchIco } from "./Icons";
import Axios from 'axios';
import config from './APIKey';

export default function Weather() {
    const [result, setResult] = useState({});
    const [cityName, setCityName] = useState("");
    const [show, setShow] = useState(false);
    
    const fetchAPI=() =>{
        Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${config.apiKey}`
            ).then((Response)=>{
                setResult(Response.data)
            })
        console.log(cityName);
        console.log(result);
        setShow(true);
        
    }
    const handelKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchAPI();
        }
    }
        return(
            <>
            <div className="search">
                <input type="text" 
                        className="search-bar" 
                        placeholder="Search" 
                        onChange={(event)=> setCityName(event.target.value)}
                        onKeyDown={handelKeyDown}
                />
                <button className="search-button"
                        onClick={fetchAPI}>
                    <SearchIco />
                </button>
            </div>
            <div className={show? "weather" : "weather loading"}>
                <h1 className="city">Weather in {result?.name}</h1>
                <div className="temp">{Math.round(result?.main?.temp)}°C</div>
1               <div className="feels_like">Feels like {Math.round(result?.main?.feels_like)}°C</div>
                <img src="" alt="" className="icon"/>
                <div className="description">{result?.weather?.description}</div>
                <div className="div-table">
                    <div className="div-row">
                        <div className="humidity">Humidity: {result?.main?.humidity}%</div>
                        <Drop />
                    </div>
                </div>
                <div className="div-table">
                    <div className="div-row">
                        <div className="wind">Wind speed: {Math.round(result?.wind?.speed)}km/h</div>
                        <Wind />
                    </div>
                </div>
                <p>
                    <button
                    className="btn-primary btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    >
                    Click Here More Info
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <div className="sunrise">Sunrise time: {result?.sys?.sunrise}</div>
                    <div className="sunset">Sunset time: {result?.sys?.sunset}</div>
                    <div className="date">{result?.timezone}</div>
                    </div>
                </div>
            </div>
        </>
    );
}