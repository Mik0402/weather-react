import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="overview">
        <h1>{props.data.city}</h1>
        <h2><FormattedDate date={props.data.date} /></h2>
        <div className="description text-capitalize">{props.data.description}</div>
      </div>
      <div className="row">
        <div className="col-8 clearfix weather-temperature">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
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