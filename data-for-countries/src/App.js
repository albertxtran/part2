import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setFilter] = useState("");

  const filteredCountries =
    newFilter !== ""
      ? countries.filter((country) =>
          country.name.toLowerCase().includes(newFilter.toLowerCase())
        )
      : countries;

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleFilterChange = (value) => {
    setFilter(value);
    return;
  };

  const showCountry = (selected) => {
    setFilter(selected.name);
    return;
  };
  return (
    <div>
      <h1>Hello, Worlds</h1>
      <Search filter={newFilter} onSearch={handleFilterChange} />

      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        [
          filteredCountries.length <= 10 ? (
            <ul>
              {filteredCountries.map((country, i) => (
                <div>
                  <li key={country.numericCode}>{country.name}</li>
                  <button onClick={() => showCountry(country)}>show</button>
                </div>
              ))}
            </ul>
          ) : (
            <p>Too many matches, specify another filter</p>
          ),
        ]
      )}
    </div>
  );
};

export default App;
