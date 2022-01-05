import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import './SavedCard.css'

const SavedCard = () =>{
  return(
    <NewsCard>
      <button className="delete-button" />
    </NewsCard>
  )
}
export default SavedCard