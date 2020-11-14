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
import {newsApi} from '../../utils/NewsApi';

const Main = ({
  handleRegistrationSubmit,
  handleLoginSubmit,
  loggedIn,
  setLoggedIn,
  setErrorMessage,
  errorMessage,
  isRegister,
  setIsRegister,
  isConfirmOpen,
  search,
  setSearch,
  isLoginOpen,
  setIsLoginOpen,
  name,
  handleFlag,
  handleLoginOut,
  setIsConfirmOpen
}) => {
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  // переключатели попапов
  const toggleLoginForm = () => {
    setIsLoginOpen(!isLoginOpen);
  }

  const toggleRegisterForm = () => {
    setIsRegister(!isRegister);
  }

  const toggleConfirmForm = () => {
    setIsConfirmOpen(!isConfirmOpen);
  }

  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('articles')));
  }, []);

  const handleSearch = () => {
    newsApi.getAllArticles(search)
      .then((data) => {
        setIsLoading(true)
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('search', search);
        setArticles(data.articles);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false)
      });
  }

   console.log(articles);

  return (
    <>
      <div className='main__background'>
        <Header 
        theme={true} 
        isPopupOpen={isLoginOpen} 
        toggleForm={toggleLoginForm}
        handleLoginOut={handleLoginOut}
        loggedIn={loggedIn}
        name={name} />
        <Search handleSearch={handleSearch} setSearch={setSearch} />
      </div>
      {(!Array.isArray(articles)) ? '' :
        <Results main={true}
          handleFlag={handleFlag}
          articles={articles}
          setArticles={setArticles}
          search={search} />
      }
      {Array.isArray(articles) ? (articles.length) === 0 ? <NotFound /> : '' : ''}
      {isLoading ? <Preloader /> : ''}
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
}

export default React.memo(Main);