import React, { useEffect, useState } from 'react';

const TempApp = () => {
    const [city,setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async ()=> {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d6e31444beb8a24973ae569cc674e1d5`;
            const response = await fetch(url);
            const resjson = await response.json();
            // console.log(resjson);
            setCity(resjson.main);
        }

        fetchApi();
    },[search]);
    return (
        <>
        <div className="weather_body">

            <div className="weather-box">
                <div className="inputField">
                    <input type="search"
                        className="searchField"
                        value={search}
                        placeholder="search here"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>

                {!city ? (
                    <p>No data found</p>
                ):(
                    <>
                    <div className="info">
                    <h2 className="Location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp} °Cel
                    </h1>

                    <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max} °Cel</h3>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                </div>
               
                    </>
                )}

                
                
            </div>
        </div>
        </>
    )
}
export default TempApp;