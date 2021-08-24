const Country = ({ country }) => {
  console.log("flag: ", country.flag);
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
      <img src={country.flag} alt="new" />
    </div>
  );
};

export default Country;
