import { useState } from 'react'
import './App.css'
import CountryList from './CountryList/CountryList';
import Search from './Search/Search'

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="App">
      <Search countries={countries} setCountries={setCountries} />
      <div className="list-them">
        {countries && <CountryList countries={countries} />}
      </div>
    </div>
  )
}

export default App
