import './style.css';

const CountryDetail = ({country}) => {
    return ( 
        <div className="detail">
            <h2>{country.name.common}</h2>
            <div className="under-n">
                <p>capital : {country.capital}</p>
                <p>area : {country.area} </p>
            </div>
            <h4>Languages</h4>
            <div className="under-lang">
                <li>language</li>
            </div>
            <div className="flag">
                <img src={country.flags.png} alt={country.name.common} className="" />
            </div>
            <h4>Weather in {country.capital}</h4>
            <div className="weather">
                weather details
            </div>
        </div>
     );
}
 
export default CountryDetail;