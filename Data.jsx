import getData from '../api/getData';
import { useState } from 'react';
import Search from "./Search"
import Card from "./Card"

function Data() {
    const [query,setQuery]=useState('');
    const [weather,setWeather]=useState({});

    const search=async ()=>{
        const data=await getData(query);
        setWeather(data);
        setQuery("");
    }
    const searching=async (e)=>{
        if(e.key==="Enter"){
            const data=await getData(query);
            setWeather(data);
            setQuery("");
        }
    }
    return ( 
        <div className='main-container'>
            <Search query={query} setQuery={setQuery} search={search} searching={searching}/>
            <Card weather={weather} />
        </div>
     );
}

export default Data;