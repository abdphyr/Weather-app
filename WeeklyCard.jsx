

import React from 'react';

const WeeklyCard = ({weather,date}) => {
    const today = date[0] + '/' + date[1] + '/' + date[2];
    return (
        <div className='cardSecWeek col-md-6 col-xl-4'>
            <div className='cardMainWeek'>
                <div className='image'>
                    <img className="card-img-top" src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Rasm
                    " />
                    <div>{weather.weather[0].description}</div>
                </div> 
                <div className='text-center'>
                    <b>Temperature : </b>
                    {(weather.temp.day-273).toFixed()} 
                    <sup>&deg;</sup>C
                </div>
                <div className='text-center'>
                    <b>Feels like : </b>
                    {(weather.feels_like.day-273).toFixed()} 
                    <sup>&deg;</sup>C
                </div>
                <div className='text-center'>
                    <b>Atmosphere pressure : </b>
                    {weather.pressure} 
                </div>
                <div className='text-center'>
                    <b>Wind degree : </b>
                    {weather.wind_deg} <sup>&deg;</sup>
                </div>
                <div className='text-center'>
                    <b>Wind speed : </b>
                    {weather.wind_speed} m/s
                </div>
            </div>
        </div>
    );
};

export default WeeklyCard;