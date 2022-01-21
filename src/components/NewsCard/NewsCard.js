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
      <img src={props.urlToImage} alt={`Headline for ${props.title}`} className="newscard__image" />
      <div className="newscard__text">
        <p className="newscard__date">{date}</p>
        <a href={props.url} className="newscard__link" target="_blank" rel='noreferrer'>
        <h3 className="newscard__title">{props.title}</h3>
        <p className="newscard__paragraph">{props.description}
        </p>
        </a>
        <p className="newscard__source">{props.source.name}</p>
      </div> 
    </article>
  );
}

export default NewsCard;
