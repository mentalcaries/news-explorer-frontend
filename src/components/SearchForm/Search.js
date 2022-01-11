import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Search.css';

function Search({searchQuery, setSearchQuery, onSubmit}) {


  const [placeholder, setPlaceholder] = useState("Enter topic")
  const [query, setQuery] = useState('')

  function handleSearchChange(evt) {
    setQuery(evt.target.value);
  }

  function handleSearchSubmit(evt){
    evt.preventDefault()
    if (query===''){
      return setPlaceholder('Please enter some keywords')
    }
    onSubmit(query)
  }


  return (
    <form className="search" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="search__field"
        value={query}
        onChange={handleSearchChange}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
