import React, { useState } from 'react';
import { SearchIco } from './Icons';
// import Weather from './Weather';

export default function Search() {
    // const [cityName, setCityName] = useState("");


    return(
        <>
            <div className="search">
                <input type="text" 
                        className="search-bar" 
                        placeholder="Search" 
                        // onChange={(event)=> setCityName(event.target.value)}
                />
                <button className="search-button">
                    <SearchIco />
                </button>
            </div>
        </>
    );
}