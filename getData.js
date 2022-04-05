
import axios from "axios";
const URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY='b68625b5d002291849cc06643aa2f924';

export const getData=async (query)=>{
    const { data }=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            appid:API_KEY
        }
    })
    return data;
}

export default getData;