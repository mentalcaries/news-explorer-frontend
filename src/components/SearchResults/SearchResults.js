import React from 'react';
import {useState} from 'react/cjs/react.development';

import ResultCard from '../ResultCard/ResultCard';
import './SearchResults.css';

function SearchResults({articles, isLoading}) {
  const CARDS_RENDERED = 3;
  const [moreCards, setMoreCards] = useState(0);

  function handleShowMore() {
    setMoreCards(moreCards + CARDS_RENDERED);
  }

  const newsList = articles.slice(0, CARDS_RENDERED + moreCards);

  return (
    <section className="results">
      <div className="results__wrapper">
        <h2 className="results__title">Search results</h2>
        <div className="results__cards">
          {newsList.map((card) => {
            return (
              <ResultCard card={card} key={card.source.id + card.publishedAt} />
            );
          })}
        </div>
        <div className="results__button">
          {newsList.length !== articles.length && (
            <button onClick={handleShowMore} className="results__show-more">
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
