/* eslint-disable no-nested-ternary */
import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Search from '../search/Search';
import About from '../about/About';
import Footer from '../footer/Footer';
import Results from '../results/Results';
import Login from '../Login/Login';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Register from '../Register/Register';
import Preloader from '../Preloader/Preloader';
import NotFound from '../notFound/notFound';
import { newsApi } from '../../utils/NewsApi';
import { useLocation } from 'react-router-dom';

const Main = ({
  handleRegistrationSubmit,
  handleLoginSubmit,
  loggedIn,
  setErrorMessage,
  errorMessage,
  setSavedArticles,
  savedArticles,
  isRegister,
  setIsRegister,
  isConfirmOpen,
  keyWord,
  setKeyWord,
  isLoginOpen,
  setIsLoginOpen,
  handleLoginOut,
  setIsConfirmOpen
}) => {
  const { search: needLogin } = useLocation();
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // переключатели попапов
  const toggleLoginForm = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleRegisterForm = () => {
    setIsRegister(!isRegister);
  };

  const toggleConfirmForm = () => {
    setIsConfirmOpen(!isConfirmOpen);
  };

  React.useEffect(() => {
    if (needLogin.includes('need')) {
      setIsLoginOpen(true);
    }
  }, [needLogin]);

  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('articles')));
  }, []);

  const handleSearch = () => {
    setIsLoading(true);
    newsApi.getAllArticles(keyWord)
      .then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('search', keyWord);
        setArticles(data.articles);
      })
      .catch(err => console.warn(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className='main__background'>
        <Header
          theme={true}
          isPopupOpen={isLoginOpen}
          toggleForm={toggleLoginForm}
          handleLoginOut={handleLoginOut}
          loggedIn={loggedIn} />
        <Search handleSearch={handleSearch} setKey={setKeyWord} />
      </div>
      {
        keyWord === null ? '' : <>
          {(!Array.isArray(articles)) || articles.length === 0 ? ''
            : <Results main={true}
              loggedIn={loggedIn}
              articles={articles}
              setArticles={setArticles}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              toggleLoginForm={toggleLoginForm}
              keyword={keyWord} />
          }
          {isLoading ? <Preloader /> : ''}
          {Array.isArray(articles) ? articles.length === 0 ? <NotFound /> : '' : ''}

        </>
      }
      <About />
      <Footer />
      <Login
        isPopupOpen={isLoginOpen}
        toggleForm={toggleLoginForm}
        setIsRegisterOpen={setIsRegister}
        setErrorMessage={setErrorMessage}
        onLoginSubmit={handleLoginSubmit}
      />
      <Register
        isPopupOpen={isRegister}
        toggleForm={toggleRegisterForm}
        handleRegistrationSubmit={handleRegistrationSubmit}
        setIsLoginOpen={setIsLoginOpen}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage} />
      <PopupWithForm
        isPopupOpen={isConfirmOpen}
        toggleForm={toggleConfirmForm}
        setIsLoginOpen={setIsLoginOpen} />
    </>
  );
};

export default React.memo(Main);
