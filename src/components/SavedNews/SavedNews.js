import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';
import sample from './sample.json'

function SavedNews() {


  const card = JSON.parse(JSON.stringify(sample));


  return (
    <section className="saved">
      <SavedNewsHeader />

      <div className="saved__articles">
        <SavedCard card={card} />
        <SavedCard card={card} />
        <SavedCard card={card} />
        <SavedCard card={card} />
        <SavedCard card={card} />

      </div>
      {/* Add saved cards here */}
    </section>
  );
}
export default SavedNews;
