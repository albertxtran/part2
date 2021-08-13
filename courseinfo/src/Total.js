const Total = (props) => {
  let totalExercises =
    props.parts.length === 0
      ? 0
      : props.parts.reduce((total, part) => {
          total = total + part.exercises;
          return total;
        }, 0);
  return (
    <>
      <p style={{ fontWeight: "bold" }}>Total of {totalExercises} exercises</p>
    </>
  );
};

export default Total;
