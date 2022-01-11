import React, {useState} from "react";
import NewsCard from "../NewsCard/NewsCard";
import './ResultCard.css'

function ResultCard(props){

  
  const [isSaved, setIsSaved] = useState(false)

  return(
  <NewsCard props={props.card}>
      <button className={`save-button ${isSaved? 'save-button_active' :''}`} onClick={()=>{setIsSaved(!isSaved)}}/>
</NewsCard>
  )}

export default ResultCard