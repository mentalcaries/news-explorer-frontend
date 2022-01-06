import React, {useState} from "react";
import NewsCard from "../NewsCard/NewsCard";
import './ResultCard.css'

const ResultCard = () =>{

  const [isSaved, setIsSaved] = useState(false)

  return(
  <NewsCard>
      <button className={`save-button ${isSaved? 'save-button_active' :''}`} onClick={()=>{setIsSaved(!isSaved)}}/>
</NewsCard>
  )}

export default ResultCard