import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    console.log("filter event: ", event);
    setFilter(event.target.value);
  };

  const handleNameChange = (event) => {
    console.log("name event: ", event);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("number event: ", event);
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    console.log("event: ", event);
    console.log("new name: ", newName);
    console.log("new number: ", newNumber);
    if (newName === "" || newNumber === "")
      return alert("All fields must be completed");
    if (persons.find((person) => person.name === newName))
      return alert(`${newName} is already added to phonebook`);
    setPersons(persons.concat({ name: newName, number: newNumber }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <form>
          <div>
            filter shown with
            <input value={newFilter} onChange={handleFilterChange} />
            <div>debug: {newFilter}</div>
          </div>
        </form>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
          <div>debug: {newName}</div>
        </div>
        <div>
          number:
          <input value={newNumber} onChange={handleNumberChange} />
          <div>debug: {newNumber}</div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(newFilter.toLowerCase())
          )
          .map((filteredNames) => (
            <li key={filteredNames.name}>
              {filteredNames.name} {filteredNames.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
