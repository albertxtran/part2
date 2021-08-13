import Part from "./Part";

const Content = (props) => {
  if (props.parts.length === 0)
    return (
      <div>
        <p>No courses available</p>
      </div>
    );
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
