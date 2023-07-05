import React, { useState } from "react";
import { Drop } from "./Icons";
import { Wind } from "./Icons";
// import Search from "./Search";
// import Axios from 'axios';
// import config from './APIKey';


export default function Weather() {
    // const [result, setResult] = useState({});

    // const fetchAPI=() =>{
    //     Axios.get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=$(Search.cityName)&units=metric&appid=$(config.apiKey)`
    //         ).then((Response)=>{
    //         setResult(Response.data)
    //     })
    // }

    return(
        <>
            <div className="weather loading">
                <h1 className="city" />
                <div className="temp" />
                <div className="feels_like" />
                <img src="" alt="" className="icon" />
                <div className="description" />
                <div className="div-table">
                    <div className="div-row">
                        <div className="humidity" />
                        <Drop />
                    </div>
                </div>
                <div className="div-table">
                    <div className="div-row">
                        <div className="wind" />
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
                    <div className="sunrise" />
                    <div className="sunset" />
                    <div className="date" />
                    </div>
                </div>
            </div>
        </>
    );
}