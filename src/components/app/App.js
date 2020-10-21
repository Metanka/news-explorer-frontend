import React from 'react';
import './App.css';
import Header from '../header/Header';
import Search from '../search/Search';
import About from '../about/About';

const App = () => {

  return (
    <div className="App">
      <div className='app__background'>
        <Header />
        <Search />
      </div>
      <About />
    </div>
  );
}

export default React.memo(App);