import CountryData from "../CountryData/CountryData";

function CountryDetail({ country, handleVisitedCountry, handleVisitedFlags }) {
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
}

export default CountryDetail;
