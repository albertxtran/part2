const Persons = (props) => {
  return (
    <li>
      {props.name} {props.number}
    </li>
  );
};

export default Persons;