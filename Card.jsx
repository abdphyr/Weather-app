import React,{useState,useEffect} from 'react';
import getDataSeven from "../api/getDataSeven"
import WeeklyCard from './WeeklyCard';

const Card = ({weather}) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    let day = +mm
    let Today=mm + "/" + dd + "/" + yyyy

    const lat=weather.coord?.lat
    const lon=weather.coord?.lon
    const [weatherSeven,setWeatherSeven]=useState({});
    const searchSeven=async ()=>{
        const data=await getDataSeven(lat,lon);
        setWeatherSeven(data);        
    }
    useEffect(()=>{
        searchSeven()
    },[weather])


    const [week,setWeek]=useState(false)
    return (
        <div className='data'>
            {weather.main && (
                <div className='cardSec'>
                    <div className='cardMain'>
                        <div className='cardImgTop image'>
                            <img className="card-img-top" src={`https://api.openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt={weather.weather.id} />
                            <div>{weather.weather[0].description}</div>
                        </div>
                        <div className='cardHeader text-center'>
                            <h2 className='city-name'>
                                <span>{weather.name}</span>
                                <sup>{weather.sys.country}</sup>
                            </h2>
                        </div>
                        <div className="cardBody text-center py-2"> 
                            <div className='date'>
                                <b>Today : </b>
                                {Today}
                            </div>  
                            <div className='text-center'>
                                <b>Temperature : </b>
                                {weather.main.temp} 
                                <sup>&deg;</sup>C
                            </div>
                            <div className='text-center'>
                                <b>Feels like : </b>
                                {weather.main.feels_like} 
                                <sup>&deg;</sup>C
                            </div>
                            <div className='text-center'>
                                <b>Atmosphere pressure : </b>
                                {weather.main.pressure} 
                            </div>
                            <div className='text-center'>
                                <b>Wind degree : </b>
                                {weather.wind.deg} <sup>&deg;</sup>
                            </div>
                            <div className='text-center'>
                                <b>Wind speed : </b>
                                {weather.wind.speed} m/s
                            </div>
                        </div>
                        <div className='cardFooter'>
                            <button onClick={()=>{
                                setWeek(!week)
                            }}>
                                Next eight days weather
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className={(week?"":"hide ")+("weekly row")}>
                {weatherSeven.daily?.map(weatherS=>{
                    day++
                    return (
                        <WeeklyCard key={weatherS.wind_speed} date={[day,dd,yyyy]}  weather={weatherS}  />
                    )
                })}
            </div>
        </div>
    );
};

export default Card;