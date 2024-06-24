import { useState } from "react";
import "./Country.css";
function Country({ country }) {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h3>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>{population}</p>
      <p>{area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      <p>
        {visited
          ? "I have visited this country"
          : "I want to visit this country"}
      </p>
    </div>
  );
}

export default Country;
