import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedCard.css';

const SavedCard = ({card, onDelete}) => {
  const [deleteHover, setDeleteHover] = React.useState(false);
 
  function handleDeleteClick(){
    onDelete(card._id)
  }
  return (
    <NewsCard props={card}>
      <p className="keyword-label">{card.keyword}</p>
      <button
        onMouseEnter={() => {
          setDeleteHover(true);
        }}
        onMouseLeave={() => {
          setDeleteHover(false);
        }}
        className="delete-button"
        onClick={handleDeleteClick}
      />
      <button className={`tooltip ${deleteHover ? 'tooltip_visible' : ''}`}  >
        Remove from saved
      </button>
    </NewsCard>
  );
};
export default SavedCard;
