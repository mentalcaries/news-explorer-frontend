import React from 'react';
import SavedCard from '../SavedCard/SavedCard';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';
import sample from './sample.json'

function SavedNews({savedArticles}) {

  const card = JSON.parse(JSON.stringify(sample));


  return (
    <section className="saved">
      <SavedNewsHeader />

      <div className="saved__articles">
        {savedArticles.map((article)=>{
         return  <SavedCard card={article} id={article._id} />
        })}


      </div>
      {/* Add saved cards here */}
    </section>
  );
}
export default SavedNews;
