import React, {useState} from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../SearchResults/SearchResults';
import SavedNews from '../SavedNews/SavedNews';
import {Route} from 'react-router';
import Preloader from '../Preloader/Preloader';
import Login from '../Login/Login';
import Register from '../Register/Register';
import {api} from '../utils/NewsApi';
import NoResult from '../NoResult/NoResult';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem('searchResults'))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    console.log({email, password});
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    console.log({email, password, username});
  }

  //get search result from Search component
  function handleSearchSubmit(query) {
    setIsLoading(true);
    api
      .getNews(query)
      .then((data) => {
        setArticles(data.articles);
        localStorage.setItem('searchResults', JSON.stringify(data.articles));
        setIsLoading(false);
        setSearchSubmitted(true);
      })
      .catch((err) => console.log(`Something went wrong: ${err}`));
  }

  function handleLogin() {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  }

  function handleRegister() {
    setIsRegisterModalOpen(true);
    //Header menu may have to be closed here as well
  }

  function closeAllModals() {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
  }

  function handleOutsideClick(evt) {
    if (evt.target.className === 'modal__overlay') {
      closeAllModals();
    }
  }

  function switchModal() {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onLogin={handleLogin}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Route exact path="/">
        <Main onSubmit={handleSearchSubmit} />
        {isLoading && <Preloader />}

        {searchSubmitted &&
          (articles.length === 0 ? (
            <NoResult />
          ) : (
            <SearchResults articles={articles} />
          ))}
      </Route>
      <ProtectedRoute path="/articles" loggedIn={loggedIn}>
        <SavedNews />
      </ProtectedRoute>
      <About />
      <Login
        isOpen={isLoginModalOpen}
        onClose={closeAllModals}
        onSubmit={handleLoginSubmit}
        setEmail={setEmail}
        email={email}
        password={password}
        setPassword={setPassword}
        onOutsideClick={handleOutsideClick}
        onSwitchModal={switchModal}
      />
      <Register
        isOpen={isRegisterModalOpen}
        onClose={closeAllModals}
        onSubmit={handleRegisterSubmit}
        setEmail={setEmail}
        email={email}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        onOutsideClick={handleOutsideClick}
        onSwitchModal={switchModal}
      />
      <Footer />
    </div>
  );
}

export default App;
