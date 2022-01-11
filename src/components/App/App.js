import React, {useState} from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../SearchResults/SearchResults';

import {Route} from 'react-router';
import Preloader from '../Preloader/Preloader';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { api } from '../utils/NewsApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerms, setSearchTerms] = useState('')


    api.getNews('dogs')
    .then(data=>console.log(data.articles))

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    console.log({email, password});
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    console.log({email, password, username});
  }

  function handleSearchSubmit(evt){
    evt.preventDefault();
    console.log(searchTerms)
  }

  function handleLogin() {
    setIsLoginModalOpen(true);
    setIsMenuOpen(false)
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

  function switchModal(){
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsRegisterModalOpen(!isRegisterModalOpen)
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} onLogin={handleLogin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Route exact path="/">
        <Main onSubmit={handleSearchSubmit} searchTerms={searchTerms} setSearchTerms={setSearchTerms} />
      </Route>
      <ProtectedRoute path="/articles" loggedIn={loggedIn}></ProtectedRoute>
      <About />
      <SavedNews />
      <SearchResults />
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
