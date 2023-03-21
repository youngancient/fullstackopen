import { useEffect, useState } from 'react';
import './style.css';

const Search = ({contacts, setContacts, duplicate}) => {
    const [search, setSearch] = useState({
        q : '',
        isSearch : false,
    })
   
    const handleSearch =(e)=>{
        let q = e.target.value.toLowerCase();
        if(q !== ""){
            setSearch({
                q : q,
                isSearch : true,
            })
        }else{
            setSearch({
                q : q,
                isSearch : false,
            })
        }
    }
    useEffect(()=>{
        let newContacts = duplicate.filter((contact)=>{
             if(contact.name.toLowerCase().includes(search.q.toLowerCase())){
                return contact;
             }
        })
        setContacts(newContacts);
    },[search.q]);
    return ( 
        <div className="search-box">
            <label htmlFor="search">Filter names</label>
            <input type="text" name="search" id="" onChange={handleSearch} onKeyUp={handleSearch} />
        </div>
        
     );
}
 
export default Search;