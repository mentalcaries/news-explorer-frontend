import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

function SavedNews({savedArticles, onDelete}) {
  return (
    <section className="saved">
      <SavedNewsHeader savedArticles={savedArticles} />

      <div className="saved__articles">
        {savedArticles.map((article) => {
          return (
            <SavedCard card={article} key={article._id} onDelete={onDelete} />
          );
        })}
      </div>
      {/* Add saved cards here */}
    </section>
  );
}
export default SavedNews;
