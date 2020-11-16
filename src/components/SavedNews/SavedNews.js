import React from 'react';
import './SavedNews.css';
import Header from '../header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Results from '../results/Results';
import Footer from '../footer/Footer';

const SavedNews = ({ loggedIn, name, handleLoginOut }) => {
  const [savedArticles, setSavedArticles] = React.useState([]);

  return (
    <>
      <Header loggedIn={loggedIn} name={name} handleLoginOut={handleLoginOut} />
      <SavedNewsHeader savedArticles={savedArticles} name={name} />
      <Results saved={true}
      savedArticles={savedArticles}
      setSavedArticles={setSavedArticles} />
      <Footer />
    </>
  );
};

export default React.memo(SavedNews);
