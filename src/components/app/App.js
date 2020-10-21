import React from 'react';
import './App.css';
import Header from '../header/Header';

const App = () => {

  return (
    <div className="App">
      <div className='app__background'>
        <Header />
      </div>
    </div>
  );
}

export default React.memo(App);