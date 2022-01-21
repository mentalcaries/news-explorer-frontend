import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedCard.css';

const SavedCard = ({card}) => {
  const [deleteHover, setDeleteHover] = React.useState(false);

  return (
    <NewsCard props={card}>
      <p className="keyword-label">Nature</p>
      <button
        onMouseEnter={() => {
          setDeleteHover(true);
        }}
        onMouseLeave={() => {
          setDeleteHover(false);
        }}
        className="delete-button"
      />
      <button className={`tooltip ${deleteHover ? 'tooltip_visible' : ''}`}>
        Remove from saved
      </button>
    </NewsCard>
  );
};
export default SavedCard;
