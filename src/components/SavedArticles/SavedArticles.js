import React from 'react';
import './SavedArticles.css';

function SavedArticles() {
  return (
    <section className="saved">
      <h3 className="saved__title">Saved Articles</h3>
      <h2 className="saved__heading">
        Elise, you have 5 saved articles
      </h2>
      <p className="saved__subtitle">
        By keywords:{' '}
        <span className="saved__accent">
          Nature, Yellowstone and 2 others
        </span>
      </p>


    </section>
  );
}
export default SavedArticles