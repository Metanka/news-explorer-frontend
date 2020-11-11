import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {register} from '../../utils/auth';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegister, setIsRegister] = React.useState({});

  const handleRegistrationSubmit = () => {
    register(password, email, setIsRegister)
      .then((res) => {
        setLoggedIn(true);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            exact
            path='/saved-news'
            component={SavedNews}
            loggedIn={loggedIn}
          >
          </ProtectedRoute>
          <Route exact path='/'>
            <Main
              handleRegistrationSubmit={handleRegistrationSubmit}
              isRegister={isRegister}
              setIsRegister={setIsRegister}
              />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);