import { React } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Search from '../SearchForm/Search';
import './Main.css';

function Main() {
  return (
    <section className="main">
      <div className="main__text">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <Search />
    </section>
  );
}

export default Main;
