import { useState } from "react";
import "./style.css";
import { v4 as uuidv } from "uuid";
import axios from "axios";
import phoneService from "../../Services/Phonebook";

const Form = ({ contacts, setContacts, duplicate, setDuplicate, setMessage }) => {
  const [form, setForm] = useState({
    number: { value: "", isEmpty: true },
    name: { value: "", isEmpty: true },
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

  // this checks if the contact already exists in  state and returns it
  const filter = (name) => {
    const c = contacts.filter((contact) => {
      let a = contact.name.toLowerCase();
      let b = name.toLowerCase();
      return a===b
    });
    return c[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.isEmpty == false && form.number.isEmpty == false) {
      setNameError();
      setNumError();
      let filtered = filter(form.name.value);
      // if the contact name already exists
      if (filtered) {
        const updatedContact = { ...filtered, number : form.number.value};
        if (
          window.confirm(
            `${form.name.value} is already added to the phonebook, replace the old number with the new?`
          )
        ) {
          phoneService
          .update(filtered.id,updatedContact)
          .then(updatedList => {
            const updated = contacts.map(contact => contact.id !== filtered.id ? contact : updatedList.data);
            setContacts(updated);
            setDuplicate(updated);
            setMessage({
              text : `updated ${form.name.value} number`,
              type : "success",
            });
            setTimeout(() => {
              setMessage({
                text : null,
                type : null,
              });
            }, 3000);
          })
        }
      } else {
        let newObj = { name: form.name.value, number: form.number.value };
        phoneService.create(newObj).then((res) => {
          setContacts(contacts.concat(res.data));
          setDuplicate(contacts.concat(res.data));
          setMessage({
            text : `${form.name.value} was added successfully`,
            type : "success",
          });
          setTimeout(() => {
            setMessage({
              text : null,
              type : null,
            });
          }, 3000);
        });
      }
      setForm({
        number: { value: "", isEmpty: true },
        name: { value: "", isEmpty: true },
      });
    } else {
      if (form.name.isEmpty == true) {
        setNameError("Name cannot be empty");
      }
      if (form.number.isEmpty == true) {
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
            type="tel"
            name="number"
            value={form.number.value}
            pattern ="[0-9\-]+"
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
