import React from 'react';
import './Main.css';
import Header from '../header/Header';
import Search from '../search/Search';
import About from '../about/About';
import Footer from '../footer/Footer';
import Results from '../results/Results';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import {newsApi} from '../../utils/NewsApi';

const Main = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const handleForm = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('articles')));
  }, []);

  const handleSearch = () => {
    newsApi.getAllArticles(search)
    .then((data) => {
      setIsLoading(true)
      localStorage.setItem('articles', JSON.stringify(data.articles));
      setArticles(data.articles);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false)});
      
  }

  console.log(articles);

  return (
    <>
      <div className='main__background'>
        <Header theme={true} isPopupOpen={isPopupOpen} toggleForm={handleForm} />
        <Search handleSearch={handleSearch} setSearch={setSearch} />
      </div>
      {(articles === (undefined || null)) ? '' :
      <Results main={true} 
      articles={articles} 
      setArticles={setArticles} />
      }
      {articles.length === 0 ? <NotFound /> : ''}
      {isLoading ? <Preloader /> : '' }
      <About />
      <Footer />
      <PopupWithForm isConfirm={false} isLogin={false} isPopupOpen={isPopupOpen} toggleForm={handleForm} />
    </>
  );
}

export default React.memo(Main);