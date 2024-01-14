import React from "react";
import FormattedDate from "./FormattedDate"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="overview">
        <h1>{props.data.city}</h1>
        <h2><FormattedDate date={props.data.date} /></h2>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="clearfix weather-temperature">
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-left"
            />
            <strong>{Math.round(props.data.temperature)} </strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
            <div className="description">{props.data.description}</div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
        </div>
        </div>
    );
}