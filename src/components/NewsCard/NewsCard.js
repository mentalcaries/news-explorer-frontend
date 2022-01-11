import React from 'react';
import './NewsCard.css';

function NewsCard({props, children}) {

  // console.log(props.title)
  const date = new Date(props.publishedAt).toLocaleDateString(
    'en-us',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )
  return (
    <article className="newscard">
     {children}
      <img src={props.urlToImage} alt="" className="newscard__image" />
      <div className="newscard__text">
        <p className="newscard__date">{date}</p>
        <h3 className="newscard__title">{props.title}</h3>
        <p className="newscard__paragraph">{props.content}
        </p>
        <p className="newscard__source">{props.source.name}</p>
      </div> 
    </article>
  );
}

export default NewsCard;
