import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import NumberList from "./Components/NumberList/NumberList";
import Search from "./Components/Seach/Search";
import phoneService from "./Services/Phonebook";

function App() {
  const [contacts, setContacts] = useState([
  ]);
  // read only state - basically copies the first state values before mutation on filter
  const [duplicate, setDuplicate] = useState([
  ]);
  useEffect(()=>{
    phoneService
    .getAll()
    .then(res =>{
      setContacts(res.data);
      setDuplicate(res.data);
    })
    .catch((err) => {
      console.log("error");
    });
  },[])
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <section>
        <div className="search">
          <Search
            contacts={contacts}
            setContacts={setContacts}
            duplicate={duplicate}
          />
        </div>
      </section>
      <section>
        <h2>Add a new</h2>
        <Form
          contacts={contacts}
          setContacts={setContacts}
          duplicate={duplicate}
          setDuplicate={setDuplicate}
        />
      </section>
      <section>
        <h2>Numbers</h2>
        <NumberList contacts={contacts} setContacts={setContacts} setDuplicate={setDuplicate} />
      </section>
    </div>
  );
}

export default App;
