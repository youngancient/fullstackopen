import phoneService from "../../Services/Phonebook";

const List = ({contact, contacts, setDuplicate, setContacts}) => {

    const handleDelete = ()=>{
        if(window.confirm(`Delete ${contact.name} ?`)){
            phoneService
            .deleteContact(`${contact.id}`);
            const newContacts = contacts.filter((ele)=>{
                return ele.id !== contact.id
            });
            setContacts(newContacts);
            setDuplicate(newContacts);
        }
    }
    return ( 
        <div className="list" key={contact.id}>
            <div className="p">
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </div>
            <div className="btn">
              <button type="submit" onClick={handleDelete}>delete</button>
            </div>
          </div>
     );
}
 
export default List;