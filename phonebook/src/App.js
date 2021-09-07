import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setFilter] = useState("");

  useEffect(() => {
    personServices.getAll().then((response) => {
      console.log("get all response: ", response);
      setPersons(response);
    });
  }, []);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const addPerson = (value) => {
    let dupPerson = persons.find((person) => person.name === value.name);
    if (dupPerson) {
      if (
        window.confirm(
          `${value.name} is already added to phonebook, repalce the old number with a new one?`
        )
      ) {
        personServices
          .update(dupPerson.id, {
            ...dupPerson,
            number: value.number,
          })
          .then((response) => {
            const updatePersons = persons;
            const idx = updatePersons.findIndex(
              (person) => person.name === response.name
            );
            updatePersons[idx] = response;
            setPersons(updatePersons);
          });
        return;
      }
    }
    personServices.create(value).then((response) => {
      setPersons(persons.concat(response));
    });
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
                personId={filteredNames.id}
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
