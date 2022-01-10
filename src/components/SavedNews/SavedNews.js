import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

function SavedNews() {
  return (
    <section className="saved">
      <SavedNewsHeader />

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
