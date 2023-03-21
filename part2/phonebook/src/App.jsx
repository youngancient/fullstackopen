import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import NumberList from "./Components/NumberList/NumberList";
import Search from "./Components/Seach/Search";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  // read only state - basically copies the first state values before mutation on filter
  const [duplicate, setDuplicate] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
        <NumberList contacts={contacts} />
      </section>
    </div>
  );
}

export default App;
