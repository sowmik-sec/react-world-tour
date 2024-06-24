import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
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
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Countries</h5>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ol>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
