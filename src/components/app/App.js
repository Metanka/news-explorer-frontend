import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { register, getToken, auth } from '../../utils/auth';
import { api } from '../../utils/Api';

const token = localStorage.getItem('token');

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(!!token);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegister, setIsRegister] = React.useState(false);
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [key, setKey] = React.useState('');

  const tokenCheck = () => {
    const tokenLocal = localStorage.getItem('token');
    if (tokenLocal) {
      getToken(tokenLocal).then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
        .catch(err => console.warn(err));
    }
    return () => {};
  };

  React.useEffect(() => {
    tokenCheck();
    setKey(localStorage.getItem('search'));
  }, [loggedIn]);

  const handleRegistrationSubmit = (password, email, name) => {
    register(password, email, name, setIsRegister)
      .then(() => {
        setLoggedIn(true);
        setIsRegister(false);
        setErrorMessage('');
        setIsConfirmOpen(true);
      })
      .catch(() => {
        setErrorMessage('Такой пользователь уже есть');
      });
  };

  const handleLoginSubmit = (loginEmail, loginPassword) => {
    auth(loginEmail, loginPassword)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          tokenCheck();
          setIsLoginOpen(false);
        }
      })
      .catch((err) => console.warn(err));
  };

  const handleLoginOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
  };

  const handleFlag = (keyword, title, text, date, source, link, image) => {
    api.saveArticle(keyword, title, text, date, source, link, image)
      .catch(err => console.warn(err));
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            exact
            path='/saved-news'
            component={SavedNews}
            loggedIn={loggedIn}
            handleLoginOut={handleLoginOut}
          >
          </ProtectedRoute>
          <Route exact path='/'>
            <Main
              handleRegistrationSubmit={handleRegistrationSubmit}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
              isConfirmOpen={isConfirmOpen}
              setIsConfirmOpen={setIsConfirmOpen}
              errorMessage={errorMessage}
              handleLoginOut={handleLoginOut}
              setErrorMessage={setErrorMessage}
              handleLoginSubmit={handleLoginSubmit}
              search={key}
              setSearch={setKey}
              handleFlag={handleFlag}
              isLoginOpen={isLoginOpen}
              setIsLoginOpen={setIsLoginOpen}
              />
          </Route>
        </Switch>
      </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default React.memo(App);
