import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Search from '../search/Search';
import About from '../about/About';
import Footer from '../footer/Footer';
import Results from '../results/Results';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const handleForm = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <div className='main__background'>
        <Header theme={true} isPopupOpen={isPopupOpen} toggleForm={handleForm} />
        <Search />
      </div>
      <Results main={true} />
      <About />
      <Footer />
      <PopupWithForm isConfirm={false} isLogin={false} isPopupOpen={isPopupOpen} toggleForm={handleForm} />
    </>
  );
}

export default React.memo(Main);