import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Search.css';

function Search({searchTerms, setSearchTerms, onSubmit}) {


  const [placeholder, setPlaceholder] = useState("Enter topic")

  function handleSearchChange(evt) {
    setSearchTerms(evt.target.value);
  }

  function handleSearchSubmit(evt){
    evt.preventDefault()
    if (searchTerms===''){
      setPlaceholder('Please enter some keywords')
    }
    onSubmit(searchTerms)
  }


  return (
    <form className="search" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder={placeholder}
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
