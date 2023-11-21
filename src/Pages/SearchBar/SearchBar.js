import React, { useState } from 'react';
import axiosWeatherApi from '../../axiosApi/axiosWeatherApi';


const SearchBar = ({weather,setWeather}) => {

    const [search, setSearch] = useState('')
    // console.log(weather)

    const handleSearch = async () =>{  
        try {
            const data = await axiosWeatherApi(search);
            setWeather(data);
            console.log(data)

          } catch (error) {
            console.error(error.message);
          }
        };


    return (
        <div>
        <h2>Weather Dashboard</h2>
        <div>
          <input
           className="input input-bordered input-primary w-full max-w-xs"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-accent" onClick={handleSearch}>Search</button>
        </div>
        {weather.name && (
            <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>City/Town Name</th>
                  <th>Temperature</th>
                  <th>Condition</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{weather.name}</td>
                  <td>{weather.main && weather.main.temp}°C</td>
                  <td>{weather.weather && weather.weather[0].main}</td>
                  <td>{weather.weather && weather.weather[0].description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
};

export default SearchBar;