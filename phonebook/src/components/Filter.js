const Filter = (props) => {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div>
      <form>
        <div>
          filter shown with
          <input filter={props.value} onChange={onChange} />
        </div>
      </form>
    </div>
  );
};

export default Filter;
