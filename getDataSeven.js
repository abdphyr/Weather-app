import axios from "axios";
const URL=`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}`;
const API_KEY='b68625b5d002291849cc06643aa2f924';

export const getDataSeven=async (lat,lon)=>{
    const { data }=await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${API_KEY}`)
    return data;
}

export default getDataSeven;

