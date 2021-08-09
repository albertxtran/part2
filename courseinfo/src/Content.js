import Part from "./Part";

const Content = (props) => {
  console.log("props: ", props.parts);
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
