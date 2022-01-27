import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedCard.css';

const SavedCard = ({card, onDelete}) => {
  const [deleteHover, setDeleteHover] = React.useState(false);
  const formattedKeyword = card.keyword.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

  function handleDeleteClick(){
    onDelete(card._id)
  }
  return (
    <NewsCard props={card}>
      <p className="keyword-label">{formattedKeyword}</p>
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
