import React, {useContext} from 'react';
import {CurrentUserContext} from '../../contexts/UserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({savedArticles}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved__text">
      <h3 className="saved__title">Saved Articles</h3>
      <h2 className="saved__heading">
        {' '}
        {currentUser.name}, you have {savedArticles.length} saved articles
      </h2>
      <p className="saved__subtitle">
        By keywords:{' '}
        <span className="saved__accent">Nature, Yellowstone and 2 others</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
