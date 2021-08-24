const Search = (props) => {
  const onChange = (event) => {
    props.onSearch(event.target.value);
  };
  return (
    <form>
      <div>
        find countries
        <input filter={props.value} onChange={onChange} />
      </div>
    </form>
  );
};

export default Search;
