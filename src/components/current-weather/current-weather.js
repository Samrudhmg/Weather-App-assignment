import React, { useState } from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {

    const celsius= Math.round(data.main.temp);
    const fahrenheit =Math.round(celsius * 9/5) + 32;
    console.log(fahrenheit);

    const [showFirstContent, setShowFirstContent] = useState(true);
    
      
        const toggleContent = () => {
          setShowFirstContent((prevShowFirstContent) => !prevShowFirstContent);
        };


    
  return (
    <div className="weather">
         <div>
      <button className="tooglebutton" onClick={toggleContent}>Convert</button>
    </div>
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
         {/* {showFirstContent ? <div>{celsius}</div> : <div>{fahrenheit}</div>} */}
      </div>
      <div className="bottom">
        <p className="temperature">{showFirstContent? <div>{celsius}°C</div> : <div>{fahrenheit}°F</div> }</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Temp-max</span>
            <span className="parameter-value">{data.main.temp_max}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Temp-min</span>
            <span className="parameter-value">{data.main.temp_min}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;