import { React } from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
        <div className="search__items"></div>
      <input type="text" placeholder="Enter topic" className="search__field" />
      <button className="search__button">Search</button>
    </div>
  );
}

export default Search;
