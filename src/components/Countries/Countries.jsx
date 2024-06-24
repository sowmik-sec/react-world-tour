import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
}

export default Countries;
