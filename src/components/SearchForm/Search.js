import React from 'react';
import './Search.css';

function Search({searchTerms, setSearchTerms, onSubmit}) {

  function handleSearchChange(evt) {
    setSearchTerms(evt.target.value);
  
  }

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter topic"
        className="search__field"
        value={searchTerms}
        onChange={handleSearchChange}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
