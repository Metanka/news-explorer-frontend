import React from 'react';
import './SavedNews.css';
import Header from '../header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Results from '../results/Results';
import Footer from '../footer/Footer';

const SavedNews = ({ loggedIn, handleLoginOut }) => {
  const [savedArticles, setSavedArticles] = React.useState([]);

  return (
    <>
      <Header loggedIn={loggedIn} handleLoginOut={handleLoginOut} />
      <SavedNewsHeader savedArticles={savedArticles} />
      <Results saved={true}
      loggedIn={loggedIn}
      savedArticles={savedArticles}
      setSavedArticles={setSavedArticles} />
      <Footer />
    </>
  );
};

export default React.memo(SavedNews);
