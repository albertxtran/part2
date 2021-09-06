import personServices from "../services/persons";

const deletePerson = (person) => {
  console.log("person: ", person);
  if (window.confirm(`Delete ${person.name}?`)) {
    personServices.deletePerson(person.personId);
  }
};

const Persons = (props) => {
  return (
    <div>
      <li>
        {props.name} {props.number}
        <button onClick={() => deletePerson(props)}>delete</button>
      </li>
    </div>
  );
};

export default Persons;
