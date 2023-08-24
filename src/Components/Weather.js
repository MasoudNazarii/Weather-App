import React, { useState, useContext, useEffect} from "react";
import { Drop, Wind, SearchIco } from "./Icons";
import Axios from 'axios';
import config from './APIKey';
import { ThemeContext } from "./MainCard";
import { d10, n10, d20, n20, d30, n30, d40, n40, d90, n90, d01, n01, d11, n11, d31, n31, d05, n05 } from "../icons/weather-icons-master/production/line/openweathermap/index.js";

export default function Weather() {
    const [result, setResult] = useState({});
    const [cityName, setCityName] = useState("");
    const [show, setShow] = useState(false);
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState('');
    const [iconPath, setIconPath] = useState("");
    
    const fetchAPI = () => {
        Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${config.apiKey}`
        ).then((Response)=>{
            setResult(Response.data)
            setShow(true);
            setIcon(Response.data['weather'][0]['icon'].split('').reverse().join(''));
            setDescription(Response.data['weather'][0]['description']);
        }).catch((error) => {
            console.log(error);
        });
    };
    const WeatherIcons = {
        d10, n10, d20, n20, d30, n30, d40, n40, d90, n90, d01, n01, d11, n11, d31, n31 ,d05 , n05
    };
    useEffect(() => {
        const iconValue = WeatherIcons[icon];
        const iconPathValue = iconValue ? iconValue.default : "";
        setIconPath(iconPathValue);
    }, [icon, WeatherIcons]);
    
    const handelKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchAPI();
        }
    }
    
    const sunriseTime = new Date(result?.sys?.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(result?.sys?.sunset * 1000).toLocaleTimeString();
    const isDarkMode = useContext(ThemeContext);    

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
                    alt={icon}
                     />
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
                    </div>
                </div>
            </div>
        </>
    );
}