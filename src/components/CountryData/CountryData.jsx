function CountryData({ country, handleVisitedCountry, handleVisitedFlags }) {
  return (
    <div>
      <h4>Country Data</h4>
      <p>{country.name.common}</p>
    </div>
  );
}

export default CountryData;
