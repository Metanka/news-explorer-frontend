import React from 'react';
import './App.css';
import Header from '../header/Header';
import Search from '../search/Search';
import About from '../about/About';
import Footer from '../footer/Footer';
import Results from '../results/Results';

const App = () => {

  return (
    <div className="App">
      <div className='app__background'>
        <Header />
        <Search />
      </div>
      <Results />
      <About />
      <Footer />
    </div>
  );
}

export default React.memo(App);