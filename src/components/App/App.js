import React, {useState} from 'react';
import './App.css';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SearchResults from '../SearchResults/SearchResults';
import SavedArticles from '../SavedArticles/SavedArticles';
import { Route } from 'react-router';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function App() {

  const [loggedIn, setLoggedIn] = useState(true)
  
  function handleLogin(){
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="app">
      <Header loggedIn={loggedIn} onLogin={handleLogin} />
      <Route exact path='/'>
      <Main />
      </Route>
      <ProtectedRoute  path='/articles' loggedIn={loggedIn} >
        <SavedArticles/>
      </ProtectedRoute>
      <About/>
      <SearchResults/>
      <ModalWithForm />
      <Footer/>
    </div>
  );
}

export default App;
