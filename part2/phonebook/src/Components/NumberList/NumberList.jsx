import "./style.css";
const NumberList = ({ contacts }) => {
    
  return (
    <div className="numberlist">
      {contacts.map((contact)=>(
        <div className="list" key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
      </div>
      ))}
    </div>
  );
};

export default NumberList;
