import React from "react";
import { Sun, Moon } from "./Icons";

export default function Theme() {
    return(
        <>
            <div>
                <input type="checkbox" className="checkbox" id="chk" />
                <label className="label" htmlFor="chk">
                    <Sun />
                    <Moon />
                    <div className="ball" />
                </label>
            </div>
        </>
    );
}