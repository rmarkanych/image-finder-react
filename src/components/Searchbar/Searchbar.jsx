import PropTypes from 'prop-types';
import { useState } from 'react';
const SearchBar = ({ changeQuery }) => {
  const [input, setInput] = useState('');

  const inputChange = e => {
    setInput(e.target.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    changeQuery(input);
    setInput('');
  };

  return (
    <header className="searchbar">
      <form className="searchForm" onSubmit={formSubmit}>
        <button type="submit" className="btn">
          <span className="btnLabel">Search</span>
        </button>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          value={input}
          placeholder="Search images and photos"
          onChange={inputChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  changeQuery: PropTypes.func,
};

export default SearchBar;
