import React from 'react';
import './SavedNews.css';
import Header from '../header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Results from '../results/Results';
import Footer from '../footer/Footer';


const SavedNews = ({loggedIn, name, handleLoginOut}) => {

  console.log(name);
  return (
    <>
      <Header loggedIn={loggedIn} name={name} handleLoginOut={handleLoginOut} />
      <SavedNewsHeader />
      <Results saved={true} />
      <Footer />
    </>
  )
}

export default React.memo(SavedNews);