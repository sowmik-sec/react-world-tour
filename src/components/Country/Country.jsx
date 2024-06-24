import "./Country.css";
function Country({ country }) {
  const { name, flags, population, area } = country;
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>{population}</p>
      <p>{area}</p>
    </div>
  );
}

export default Country;
