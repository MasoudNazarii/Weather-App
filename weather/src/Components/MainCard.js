import React from "react";
import Theme from "./Theme";
import Search from "./Search";
import Weather from "./Weather";

export default function MainCard() {
    return(
        <>
            <Theme />
            <Search />
            <Weather />
        </>
    );
}