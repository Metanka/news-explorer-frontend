import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/saved-news'>
            <SavedNews />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App);