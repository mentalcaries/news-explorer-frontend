import React, {useContext} from 'react';
import {CurrentUserContext} from '../../contexts/UserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({savedArticles}) {
  const currentUser = useContext(CurrentUserContext);

  // Create keyword array and hash
  const keywordArray = savedArticles.map((article) => article.keyword);
  let hash = {};
  keywordArray.forEach((keyword) => {
    if (!hash[keyword]) hash[keyword] = 0;
    hash[keyword]++;
  });
  // Sort keywords according to frequency, and create array of sorted keywords
  const hashArray = Object.entries(hash);
  const sortedArray = hashArray.sort((a, b) => b[1] - a[1]);
  const sortedElements = sortedArray.map((element) => element[0]);

  const mainKeyword = sortedElements[0];
  const secondKeyword = sortedElements[1];

  return (
    <div className="saved__text">
      <h3 className="saved__title">Saved Articles</h3>
      <h2 className="saved__heading">
        {' '}
        {currentUser.name}, you have {savedArticles.length} saved articles
      </h2>

      <p className="saved__subtitle">
        By keywords:{' '}
        {sortedElements.length < 1 ? (
          <span className="saved__accent"> Add some articles first</span>
        ) : (
          <span className="saved__accent">
            {sortedElements.length === 1 && `${mainKeyword}.`}

            {sortedElements.length === 2 &&
              `${mainKeyword} and ${secondKeyword}.`}
            {sortedElements.length > 2 &&
              `${mainKeyword}, ${secondKeyword} and ${
                sortedElements.length - 2
              } more.`}
          </span>
        )}
      </p>
    </div>
  );
}

export default SavedNewsHeader;
