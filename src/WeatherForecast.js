import React, { useState, useEffect, useLayoutEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index){
                    if (index < 6) {
                    return (
                    <div className="col">
                    <WeatherForecastDay data={dailyForecast} />
                    </div>
                );
                }
                })} 
            </div>
        </div>
    );
    } else {
        let apiKey= "0efb4fc16a9ed98dc0b3aafd8491d6ad";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        
        axios.get(apiURL).then(handleResponse);

        return null;
    }
}