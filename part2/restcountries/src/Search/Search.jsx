import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';

const Search = ({countries, setCountries}) => {
  const [duplicate, setDuplicate] = useState([]);
  const [q, setQ] = useState("");
    const handleChange =(e)=>{
      let val = e.target.value.trim();
        setQ(val)
    }
    let baseUrl = 'https://restcountries.com/v3.1/all';
    useEffect(()=>{
      axios
      .get(baseUrl)
      .then(res =>{
        setDuplicate(res.data);
      })
      .catch((err)=>{
        console.log("error");
      })
    },[]);

    useEffect(()=>{
      axios
      .get(baseUrl)
      .then(res =>{
        if(duplicate){
          const filter = duplicate.filter((data)=>{
            return data.name.common.toLowerCase().includes(q.toLowerCase());
          });
          if(q == ""){
            setCountries([]);
          }else{
            setCountries(filter);
          }
        }else{
          const filter = res.data.filter((data)=>{
            return data.name.common.toLowerCase().includes(q.toLowerCase());
          })
          setCountries(filter);
        }
      })
      .catch((err)=>{
        console.log("error");
      })
    },[q]);

  return (
    <div className="search">
      <label htmlFor="q">Find country</label>
      <input
        type="text"
        name="q"
        value={q}
        id=""
        onChange={handleChange}
        onKeyUp={handleChange}
      />
    </div>
  );
};

export default Search;
