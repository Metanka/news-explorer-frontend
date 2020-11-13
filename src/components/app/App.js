import React, { useCallback } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {register, getToken, auth} from '../../utils/auth';

const token = localStorage.getItem('token');

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(!!token);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegister, setIsRegister] = React.useState(false);
  const [name, setName] = React.useState('');
  const [selectedArticle, setSelectedArticle] = React.useState({});
  const [isConfirmOpen, setIsConfirmOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    tokenCheck()
  }, [loggedIn]);

  const handleRegistrationSubmit = (password, email, name) => {
    register(password, email, name, setIsRegister)
      .then((res) => {
        setLoggedIn(true);
        setIsRegister(false);
        setErrorMessage('');
        setIsConfirmOpen(true);
      })
      .catch(err => {
        setErrorMessage('Такой пользователь уже есть');
      })
  }

  const handleLoginSubmit = (loginEmail, loginPassword) => {
    auth(loginEmail, loginPassword)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          tokenCheck();
        }
      })
      .catch((err) => console.log(err));
  }

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      getToken(token).then((res) => {
        if (res) {
          setName(res.name);
          setLoggedIn(true);
        }
      })
        .catch(err => console.log(err))
    }
  }

  const handleLoginOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    setName('');
  }

  console.log(name);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            exact
            path='/saved-news'
            component={SavedNews}
            loggedIn={loggedIn}
            name={name}
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
              name={name}
              setIsConfirmOpen={setIsConfirmOpen}
              errorMessage={errorMessage}
              handleLoginOut={handleLoginOut}
              setErrorMessage={setErrorMessage}
              handleLoginSubmit={handleLoginSubmit}
              />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);