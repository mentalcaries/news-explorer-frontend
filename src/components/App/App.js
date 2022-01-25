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
import {api} from '../../utils/NewsApi';
import NoResult from '../NoResult/NoResult';
import ModalAlert from '../ModalAlert/ModalAlert';
import {register, authorise, verifyUser} from '../../utils/auth';
import { getCurrentUser } from '../../utils/MainApi';
import { useEffect } from 'react/cjs/react.development';
import { CurrentUserContext } from '../../contexts/UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({})
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
  const [isRegistered, setIsRegistered] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(()=>{
    checkToken();
  }, [])

  useEffect(()=>{
    loggedIn && getCurrentUser()
    .then((res) => setCurrentUser(res))
    .catch((err) => console.log(err))
  }, [loggedIn]);

  const modalOpened = isLoginModalOpen || isRegisterModalOpen || isAlertOpen;

  function resetForm() {
    setEmail('');
    setPassword('');
    setUsername('');
  }

  function handleLoginSubmit() {
    authorise(email, password)
      .then((res) => {
        if (res) {
          setIsLoginModalOpen(false);
          setSubmitError('');
          resetForm();

        }
      })
      .catch((err) => {
        if (err) {
          setSubmitError('Incorrect username or password');
        }
      });
  }

  function handleRegisterSubmit() {
    register(email, password, username)
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          setIsAlertOpen(true);
          setIsRegisterModalOpen(false);
          resetForm();
        }
      })
      .catch((err) => {
        // display the error above the button
        if (err === 'Error: 409') {
          return setSubmitError('That email is not available');
        }
        return setSubmitError('');
      });
  }

  

  function checkToken(){
    if (localStorage.getItem('jwt')){
      const jwt = localStorage.getItem('jwt');
      verifyUser(jwt)
      .then((res)=>{
        if(!res){
          return
        }
        setLoggedIn(true)
      })

    }
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

  function handleLogout() {
    setLoggedIn(false);
    setIsMenuOpen(false);
    localStorage.removeItem('jwt')
    setCurrentUser({})
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
      <CurrentUserContext.Provider value={currentUser}>
      <Header
        loggedIn={loggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        modalOpened={modalOpened}
        currentUser={currentUser}
      />
      <Route exact path="/">
        <Main onSubmit={handleSearchSubmit} />
        {isLoading && <Preloader />}

        {articles !== null &&
          (articles.length > 0 ? (
            <SearchResults articles={articles} handleLogin={handleLogin} />
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
        submitError={submitError}
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
        submitError={submitError}
      />
      <ModalAlert
        isOpen={isAlertOpen}
        onClose={closeAllModals}
        onOutsideClick={handleOutsideClick}
        onLoginClick={handleLogin}
      />
      <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
