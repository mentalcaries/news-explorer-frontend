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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // function handleLogin() {
  //   setLoggedIn(!loggedIn);
  // }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    console.log({email, password});
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    console.log({email, password, username});
  }

  function handleLogin() {
    setIsLoginModalOpen(true);
  }

  function handleRegister() {
    setIsRegisterModalOpen(true);
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
    console.log('NO')
    setIsLoginModalOpen(!isLoginModalOpen);
    setIsRegisterModalOpen(!isRegisterModalOpen)
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} onLogin={handleLogin} />
      <Route exact path="/">
        <Main />
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
