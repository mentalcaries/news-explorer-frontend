import React from 'react';
import './NewsCard.css';
import sampleImage from '../../images/coffee.jpg';

function NewsCard() {
  return (
    <article className="newscard">
      <button className="newscard__save"/>
      <img src={sampleImage} alt="" className="newscard__image" />
      <div className="newscard__text">
          <p className="newscard__date">January 3, 2022</p>
          <h3 className="newscard__title">New Year Starts with a Bang!</h3>
          <p className="newscard__paragraph">
            Ever since I read Richard Louv's influential book, "Last Child in the
            Woods," the idea of having a special "sit spot" has stuck with me. This
            advice, which Louv attributes to nature educator Jon Young, is for both
            adults and children to find.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae fugiat magnam error eos ipsa quos tempore accusamus architecto aspernatur, minima vitae officiis facilis laborum reprehenderit, alias quidem sapiente inventore animi.
          </p>
          <p className="newscard__source">The Sunday Punch</p>
      </div>
    </article>
  );
}

export default NewsCard;
