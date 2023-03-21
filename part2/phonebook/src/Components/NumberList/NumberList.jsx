import "./style.css";
const NumberList = ({ contacts }) => {
  return (
    <div className="numberlist">
      {contacts &&  contacts.map((contact)=>(
        <div className="list" key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
      </div>
      ))}
      {contacts.length == 0 && <p>No number found</p>}
    </div>
  );
};

export default NumberList;
