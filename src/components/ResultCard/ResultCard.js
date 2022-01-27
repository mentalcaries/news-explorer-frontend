import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './ResultCard.css';

function ResultCard({card, loggedIn, handleLogin, onSave,}) {
  const [isSaved, setIsSaved] = useState(false);
  const [bookmarkHover, setBookmarkHover] = React.useState(false);

  function handleSave() {
    onSave(card)
    setIsSaved(true)
  }

  return (
    <NewsCard props={card} >
      {/* Adjust button to change to active ONLY if logged in and clicked */}
      <button
        className={`save-button ${isSaved ? 'save-button_active' : ''}`}
        // if logged in, onClick should save card
        // else handle login
        onClick={loggedIn ? handleSave : handleLogin}
        onMouseEnter={() => {
          setBookmarkHover(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => setBookmarkHover(false), 1500);
        }}
      />

      {!loggedIn && (
        <button
          className={`tooltip ${bookmarkHover ? 'tooltip_visible' : ''}`}
          onClick={handleLogin}
        >
          Sign in to save article
        </button>
      )}
    </NewsCard>
  );
}

export default ResultCard;
