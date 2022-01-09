import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import './SavedNews.css';

function SavedNews() {
  return (
    <section className="saved">
      <div className="saved__text">
        <h3 className="saved__title">Saved Articles</h3>
        <h2 className="saved__heading">Elise, you have 5 saved articles</h2>
        <p className="saved__subtitle">
          By keywords:{' '}
          <span className="saved__accent">
            Nature, Yellowstone and 2 others
          </span>
        </p>
      </div>

      <div className="saved__articles">
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
        <SavedCard />
      </div>
      {/* Add saved cards here */}
    </section>
  );
}
export default SavedNews;
