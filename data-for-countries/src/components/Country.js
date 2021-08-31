import { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState();
  const lat = country.latlng[0];
  const lng = country.latlng[1];

  useEffect(() => {
    axios
      .get(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
          lat +
          "&lon=" +
          lng
      )
      .then((response) => {
        console.log("response: ", response);
        setWeather(response.data);
      });
  }, []);

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
      <div>Temperature: {weather.main.temp}</div>
      <img
        src={weather.weather[0].icon}
        alt="new"
        style={{ width: 100, height: 100 }}
      />
      <div>Wind: {weather.wind.speed} mph</div>
    </div>
  );
};

export default Country;
