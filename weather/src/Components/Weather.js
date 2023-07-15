import React, { useState, useContext } from "react";
import { Drop, Wind, SearchIco } from "./Icons";
import Axios from 'axios';
import config from './APIKey';
import { ThemeContext } from "./MainCard";
import WeatherIcons from "../icons/weather-icons-master/production/line/openweathermap";


export default function Weather() {
    const [result, setResult] = useState({});
    const [cityName, setCityName] = useState("");
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState('');
    
    const fetchAPI = () => {
        Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${config.apiKey}`
        ).then((Response)=>{
            setResult(Response.data)
            setShow(true);
            setIcon(Response.data['weather'][0]['icon'].split('').reverse().join(''));
            setDescription(Response.data['weather'][0]['description']);
            
        });
        
        console.log(icon);
    };
    
    const handelKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchAPI();
        }
    }
    

    const sunriseTime = new Date(result?.sys?.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(result?.sys?.sunset * 1000).toLocaleTimeString();
    const isDarkMode = useContext(ThemeContext);

    const iconPath = WeatherIcons.icon;

    return(
            <>
            <div className="search">
                <input type="text" 
                        className={isDarkMode ? "search-bar search-bar-dark placeholder-dark" : "search-bar"}
                        placeholder="Search" 
                        onChange={(event)=> setCityName(event.target.value)}
                        onKeyDown={handelKeyDown}
                />
                <button className={isDarkMode ? "search-button search-button-dark search-hover-dark" : "search-button"}
                        onClick={fetchAPI}>
                    <SearchIco />
                </button>
            </div>
            <div className={show? "weather" : "weather loading" && isDarkMode ? "loading-dark weather loading" : "weather loading"}>
                <h1 className="city">Weather in {result?.name}</h1>
                <div className="temp">{Math.round(result?.main?.temp)}°C</div>
               <div className="feels_like">Feels like {Math.round(result?.main?.feels_like)}°C</div>
               <img className="icon"
                    src={iconPath}
                    alt={icon} />
                <div className="description">{description}</div>
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
                    Click For More Info
                    </button>
                </p>
                <div className="collapse" id="collapseExample">
                    <div className={isDarkMode ? "card card-dark card-body" : "card card-body"}>
                    <div className="sunrise">Sunrise time: {sunriseTime}</div>
                    <div className="sunset">Sunset time: {sunsetTime}</div>
                    <div className="date">{result?.timezone}</div>
                    </div>
                </div>
            </div>
        </>
    );
}