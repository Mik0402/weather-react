import React, {useState} from "react";

export default function WeatherTemperature(props) {

    let fahrenheit = (props.celsius * 9)/ 5 + 32;
    return (
        <div className="weatherTemperature">
        <strong className="temperature">{Math.round(fahrenheit)} </strong>
        <span className="units">
       ºF
        </span>
        </div>
        );
}