import { useState } from "react";

const PersonForm = (props) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    console.log("name event: ", event);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const submitChanges = (event) => {
    event.preventDefault();
    if (newName === "" || newNumber === "")
      return alert("All fields must be completed");
    const personObj = { name: newName, number: newNumber };
    props.addPerson(personObj);
  };
  return (
    <form onSubmit={submitChanges}>
      <div>
        name:
        <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
