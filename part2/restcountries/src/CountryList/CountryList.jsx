import Country from "../Country/Country";
import CountryDetail from "../CountryDetail.jsx/CountryDetail";

const CountryList = ({countries}) => {
    return ( 
        <div className="countryl">
            {countries.length == 0 && <p>No countries searched yet</p>}
            {countries.length > 1 && countries.map((country)=>(
                <Country country={country} key={country.name.common} />
            ))}
            {countries.length == 1 && countries.map((country)=>(
                <CountryDetail country={country} key={country.name.common} />
            ))}
        </div>
     );
}
 
export default CountryList;