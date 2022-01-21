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
import {useEffect} from 'react/cjs/react.production.min';
import ModalAlert from '../ModalAlert/ModalAlert';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem('searchResults'))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  // const [showHeader, setShowHeader] = useState(true);

  const modalOpened = isLoginModalOpen || isRegisterModalOpen || isAlertOpen;

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    setLoggedIn(true);
    console.log({email, password});
    setIsLoginModalOpen(false);
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    console.log({email, password, username});
    setIsAlertOpen(true);
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
    closeAllModals();
    setIsLoginModalOpen(true);
    setIsMenuOpen(false);
  }

  function handleLogout(){
    setLoggedIn(false);
    setIsMenuOpen(false)
  }

  function handleRegister() {
    setIsRegisterModalOpen(true);
    //Header menu may have to be closed here as well
  }

  function handleAlert() {
    setIsAlertOpen(true);
  }

  function closeAllModals() {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsAlertOpen(false);
  }

  function handleOutsideClick(evt) {
    if (
      evt.target.className === 'modal__overlay' ||
      evt.target.className === 'modal-alert__overlay'
    ) {
      closeAllModals();
    }
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    };

    modalOpened && document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [modalOpened]);

  function switchModal() {
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        modalOpened={modalOpened}
      />
      <Route exact path="/">
        <Main onSubmit={handleSearchSubmit} />
        {isLoading && <Preloader />}

        {articles !== null &&
          (articles.length > 0 ? (
            <SearchResults articles={articles} handleLogin={handleLogin}/>
          ) : (
            searchSubmitted && <NoResult />
          ))}
        <About />
      </Route>
      <ProtectedRoute path="/articles" loggedIn={loggedIn}>
        <SavedNews />
      </ProtectedRoute>
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
      <ModalAlert
        isOpen={isAlertOpen}
        onClose={closeAllModals}
        onOutsideClick={handleOutsideClick}
        onLoginClick={handleLogin}
      />
      <Footer />
    </div>
  );
}

export default App;
