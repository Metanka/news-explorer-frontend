import React from 'react';
import './SavedNews.css';
import Header from '../header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Results from '../results/Results';
import Footer from '../footer/Footer';


const SavedNews = () => {
  return (
    <>
      <Header isSaved={true} name='Алина' />
      <SavedNewsHeader />
      <Results saved={true} />
      <Footer />
    </>
  )
}

export default React.memo(SavedNews);