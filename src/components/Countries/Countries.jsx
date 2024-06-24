import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    console.log(country);
    setVisitedCountries([...visitedCountries, country]);
    console.log(visitedCountries);
  };
  const handleVisitedFlags = (flag) => {
    setVisitedFlag([...visitedFlag, flag]);
  };

  // remove item from an array in a state
  // use filter

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries  */}
      <div>
        <h5>Visited Countries</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="flag-container">
        {visitedFlag.map((flag, i) => (
          <img src={flag} key={i} />
        ))}
      </div>
      {/* display countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
