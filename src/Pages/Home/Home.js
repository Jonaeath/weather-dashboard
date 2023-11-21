import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import WeatherChartCard from '../../Pages/WeatherChartCard/WeatherChartCard';

const Home = () => {
    const [weather,setWeather] = useState({})

    return (
        <div className='text-center'>
            <SearchBar weather = {weather} setWeather = {setWeather}/>
            {/* <WeatherChartCard weather = {weather} /> */}
        </div>
    );
};

export default Home;