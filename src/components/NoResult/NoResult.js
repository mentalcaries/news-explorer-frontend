import React from 'react';
import './NoResult.css';
import noResult from '../../images/notfound.svg';

function NoResult() {
  return (
    <div className="no-result">
      <img src={noResult} alt="" className="no-result__sad" />
      <h3 className="no-result__ title">Nothing found</h3>
      <p className="no-result__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}
export default NoResult;
