import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    const [weather,setWeather] = useState({})

    return (
        <div className='text-center'>
            <SearchBar weather = {weather} setWeather = {setWeather}/>
        </div>
    );
};

export default Home;