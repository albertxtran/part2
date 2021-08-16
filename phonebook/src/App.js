import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setFilter] = useState("");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const addPerson = (value) => {
    if (persons.find((person) => person.name === value.name))
      return alert(`${value.name} is already added to phonebook`);
    setPersons(persons.concat(value));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} />
      <h2>Numbers</h2>
      {persons.length !== 0 ? (
        <ul>
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(newFilter.toLowerCase())
            )
            .map((filteredNames) => (
              <Persons
                key={filteredNames.name}
                name={filteredNames.name}
                number={filteredNames.number}
              />
            ))}
        </ul>
      ) : (
        <p>There are no names in the phonebook</p>
      )}
    </div>
  );
};

export default App;
