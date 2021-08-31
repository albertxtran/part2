import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState();
  const api = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=" +
          api +
          "&query=" +
          country.name
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [api, country.name]);

  return (
    <div>
      <h1>{country.name}</h1>
      <div>Capital {country.capital}</div>
      <div>Population: {country.population}</div>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((data) => (
          <li key={data.name}>{data.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="new" style={{ width: 150, height: 150 }} />
      <h2>Weather in {country.name}</h2>
      {weather ? (
        <div>
          <div>Temperature: {weather.current.temperature} C</div>
          <img
            src={weather.current.weather_icons[0]}
            alt="new"
            style={{ width: 100, height: 100 }}
          />
          <div>
            Wind: {weather.current.wind_speed}
            mph direction {weather.current.wind_dir}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Country;
