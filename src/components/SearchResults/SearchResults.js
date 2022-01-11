import React from 'react';
import ResultCard from '../ResultCard/ResultCard';
import './SearchResults.css';

function SearchResults() {
  const newsCards =
    localStorage.searchResults && JSON.parse(localStorage.searchResults);
  console.log(newsCards);

  return (
    <section className="results">
      <div className="results__wrapper">
        <h2 className="results__title">Search results</h2>
        <div className="results__cards">
          {/* News Articles */}
          {newsCards.map((card) => {            
            return <ResultCard card={card} />;
          })}
        </div>
        <div className="results__button">
          <button className="results__show-more">Show More</button>
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
