import React, {useState} from "react";

export default function weatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius") {
    return (
    <div className="weatherTemperature">
    <strong className="temperature">{Math.round(props.celsius)} </strong>
    <span className="units">
      ºC | {" "}<a href="/" onClick={convertToFahrenheit}>ºF</a>
    </span>
    </div>
    );
} else {
    let fahrenheit = (props.celsius * 9)/ 5 + 32;
    return (
        <div className="weatherTemperature">
        <strong className="temperature">{Math.round(fahrenheit)} </strong>
        <span className="units">
        <a href="/" onClick={convertToCelsius}>ºC</a>{" "} | ºF
        </span>
        </div>
        );
}
}