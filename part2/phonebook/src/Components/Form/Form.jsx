import { useState } from "react";
import "./style.css";
import { v4 as uuidv } from "uuid";

const Form = ({contacts, setContacts, duplicate, setDuplicate}) => {
  const [form, setForm] = useState({
    number: { value: "", isEmpty: true},
    name: { value: "", isEmpty: true},
  });
  const [nameError, setNameError] = useState("");
  const [numError, setNumError] = useState("");

  const handleNameChange = (e) => {
    let val = e.target.value;
    if (val == "") {
      setNameError("Name cannot be empty");
      setForm((form) => ({
        ...form,
        name: {
          ...form.name,
          value: val,
          isEmpty: true,
        },
      }));
    } else {
      setNameError();
      setForm((form) => ({
        ...form,
        name: {
          ...form.name,
          value: val,
          isEmpty: false,
        },
      }));
    }
  };
  const handleNumberChange = (e) => {
    let val = e.target.value;
    if (e.target.value == "") {
      setNumError("Number is required");
      setForm((form) => ({
        ...form,
        number: {
          ...form.number,
          value: val,
          isEmpty: true,
        },
      }));
    } else {
      setNumError();
      setForm((form) => ({
        ...form,
        number: {
          ...form.number,
          value: val,
          isEmpty: false,
        },
      }));
    }
  };

  // this checks if the contact already exists in  state
  const filter =(name)=>{
    let equal = false;
    contacts.forEach((contact)=>{
        let a  = contact.name.toLowerCase();
        let b = name.toLowerCase();
        if(a === b){
          equal = true;
        }
    });
    return equal;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.isEmpty == false && form.number.isEmpty == false) {
      setNameError();
      setNumError();
        if(filter(form.name.value)){
            alert(`${form.name.value} is already added to the phonebook`);
        }else{
            setForm({
              number: { value: "", isEmpty: true },
              name: { value: "", isEmpty: true },
            });
            setContacts([
              ...contacts,
              { name : form.name.value, number : form.number.value, id : uuidv()}
            ])
            setDuplicate([
              ...duplicate,
              { name : form.name.value, number : form.number.value, id : uuidv()}
            ])
        }
    } else {
        if(form.name.isEmpty == true){
            setNameError("Name cannot be empty");
        }
        if(form.number.isEmpty == true){
            setNumError("Number is required");
        }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="one">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={form.name.value}
            onChange={handleNameChange}
            onKeyUp={handleNameChange}
          />
        </div>
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div className="one">
        <div className="input">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            name="number"
            value={form.number.value}
            id=""
            onChange={handleNumberChange}
            onKeyUp={handleNumberChange}
          />
        </div>
        {numError && <p className="error">{numError}</p>}
      </div>
      <div className="add-btn">
        <button
          type="submit"
          disabled={form.name.isEmpty == true && form.number.isEmpty == true}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
