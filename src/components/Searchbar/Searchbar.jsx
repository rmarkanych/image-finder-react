import React from 'react';
class SearchBar extends React.Component {
  state = {
    input: '',
  };
  inputChange = e => {
    this.setState({ input: e.target.value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.changeQuery(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.formSubmit}>
          <button type="submit" className="btn">
            <span className="btnLabel">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.input}
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
