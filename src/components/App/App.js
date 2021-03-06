import React, {useCallback, useState, useEffect} from 'react';
import './App.css';
import {Switch} from 'react-router-dom/';
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
import {
  createArticle,
  deleteArticle,
  getCurrentUser,
  getSavedArticles,
} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/UserContext';
import NotFound from '../NotFound/NotFound';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth'));
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
  const [keyword, setKeyword] = useState(localStorage.getItem('keyword'));
  const [submitError, setSubmitError] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);

  //Main API calls

  useEffect(() => {
    loggedIn &&
      getCurrentUser()
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(err));
  }, [loggedIn]);

  const getArticles = useCallback(() => {
    loggedIn &&
      getSavedArticles()
        .then((articleArray) => {
          setSavedArticles(
            articleArray
              .map((article) => {
                return {
                  _id: article._id,
                  keyword: article.keyword,
                  title: article.title,
                  content: article.text,
                  date: article.date,
                  source: {name: article.source},
                  url: article.link,
                  urlToImage: article.image,
                  owner: article.owner,
                };
              })
              .reverse()
          );
        })
        .catch(() => setSavedArticles([]));
  }, [loggedIn]);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  function saveArticle(article) {
    const isSaved = savedArticles.find(
      (savedArticle) => savedArticle.url === article.url
    );
    if (isSaved) {
      deleteArticle(isSaved._id).then(() => getArticles());
    } else
      createArticle({
        keyword,
        title: article.title,
        text: article.content,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
        owner: currentUser._id,
      })
        .then(() => {
          getArticles();
        })
        .catch((err) => console.log(err, 'Could not save card'));
  }

  function handleDeleteArticle(cardId) {
    deleteArticle(cardId)
      .then(() => {
        setSavedArticles((articles) =>
          articles.filter((article) => article._id !== cardId)
        );
      })
      .catch((err) => console.log(err, 'Could not delete card'));
  }

  ////

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
          setLoggedIn(true);
          localStorage.setItem('auth', loggedIn);
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
        if (err === 'Error: 409') {
          return setSubmitError('That email is not available');
        }
        return setSubmitError('');
      });
  }

  const checkToken = React.useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      verifyUser(jwt)
        .then((res) => {
          if (!res) {
            return;
          } else {
            setLoggedIn(true);
            localStorage.setItem('auth', loggedIn);
          }
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  //get search result from Search component
  function handleSearchSubmit(query) {
    setIsLoading(true);
    api
      .getNews(query)
      .then((data) => {
        const formattedQuery = query.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        );
        setArticles(data.articles);
        localStorage.setItem('searchResults', JSON.stringify(data.articles));
        setIsLoading(false);
        setSearchSubmitted(true);
        setKeyword(formattedQuery);
        localStorage.setItem('keyword', query);
      })
      .catch((err) => console.log(`Something went wrong: ${err}`));
  }

  function handleLogin() {
    closeAllModals();
    setIsLoginModalOpen(true);
    resetForm();
    setIsMenuOpen(false);
  }

  function handleLogout() {
    setLoggedIn(false);
    setIsMenuOpen(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('auth');
    setCurrentUser({});
  }

  function handleRegister() {
    resetForm();
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
          onRegister={handleRegister}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          modalOpened={modalOpened}
          currentUser={currentUser}
        />
        <Switch>
          <Route exact path="/">
            <Main onSubmit={handleSearchSubmit} />
            {isLoading && <Preloader />}

            {articles !== null &&
              (articles.length > 0 ? (
                <SearchResults
                  articles={articles}
                  handleLogin={handleLogin}
                  loggedIn={loggedIn}
                  onSave={saveArticle}
                  keyword={keyword}
                  savedArticles={savedArticles}
                />
              ) : (
                searchSubmitted && <NoResult />
              ))}
            <About />
          </Route>

          <ProtectedRoute exact path="/articles" loggedIn={loggedIn}>
            <SavedNews
              savedArticles={savedArticles}
              onDelete={handleDeleteArticle}
            />
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
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
