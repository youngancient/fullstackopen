import List from "./List";
import "./style.css";
const NumberList = ({ contacts, setContacts, setDuplicate }) => {
  return (
    <div className="numberlist">
      {contacts &&
        contacts.map((contact) => (
          <List
            contact={contact}
            key={contact.id}
            contacts={contacts}
            setContacts={setContacts}
            setDuplicate={setDuplicate}
          />
        ))}
      {contacts.length == 0 && <p>No number found</p>}
    </div>
  );
};

export default NumberList;
