import React, {useState} from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './ResultCard.css';

function ResultCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [bookmarkHover, setBookmarkHover] = React.useState(false);

  return (
    <NewsCard props={props.card}>
      <button
        className={`save-button ${isSaved ? 'save-button_active' : ''}`}
        onClick={() => {
          setIsSaved(!isSaved);
        }}
        onMouseEnter={() => {
          setBookmarkHover(true);
        }}
        onMouseLeave={() => {

          setTimeout(()=>setBookmarkHover(false), 1000)
        }}
      />
      <button className={`tooltip ${bookmarkHover ? 'tooltip_visible' : ''}`} onClick={props.handleLogin}
      >
        Sign in to save article
      </button>
    </NewsCard>
  );
}

export default ResultCard;
