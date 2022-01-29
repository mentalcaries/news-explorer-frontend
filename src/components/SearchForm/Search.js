import React, {useState} from 'react';
import './Search.css';

function Search({onSubmit}) {
  const [placeholder, setPlaceholder] = useState('Enter topic');
  const [query, setQuery] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function handleSearchChange(evt) {
    setQuery(evt.target.value);
  }

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (query === '') {
      return setPlaceholder('Please enter some keywords');
    }
    onSubmit(query);
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
      <button
        className={`search__button ${isHovered ? 'search__button_hover' : ''} ${
          isClicked ? 'search__button_clicked' : ''
        }`}
        type="submit"
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
