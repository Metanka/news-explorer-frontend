import React from 'react';
import './Results.css';
import NewsCard from '../newsCard/NewsCard';
import { myData } from '../../utils/Date';
import { api } from '../../utils/Api';

const Results = ({
  main, saved, articles, keyword, savedArticles, setSavedArticles, loggedIn, toggleLoginForm
}) => {
  const [numbersArticle, setNumbersArticle] = React.useState(3);
  // при нажатии добавляет +3 строки массива
  const handleAddArticles = () => {
    setNumbersArticle(numbersArticle + 3);
  };

  const getSavedArticles = () => {
    if (loggedIn) {
      api.getAllArticles()
        .then(res => {
          setSavedArticles(res);
        })
        .catch(err => console.error(err));
    }
  };

  React.useEffect(() => {
    getSavedArticles();
  }, []);

  return (
    <div className='results'>
      <div className='results__box'>
        {main
          ? <h2 className='results__title'>
            Результаты поиска
      </h2> : ''}
        <div className='cards'>
          {saved ? <>
            {
              savedArticles.map(item => {
                return (<NewsCard
                  title={item.title}
                  text={item.text}
                  author={item.name}
                  image={item.image}
                  key={Math.random() * 10000000}
                  item={item}
                  id={item._id}
                  date={item.date}
                  link={item.url}
                  loggedIn={loggedIn}
                  isSaved={true}
                  savedArticles={savedArticles}
                  setSavedArticles={setSavedArticles}
                  tag={item.keyword}
                  getSavedArticles={getSavedArticles}
                />);
              })
            }
          </> : ''
          }
          {main ? <>
            {
              articles !== (undefined || null)
                ? articles.slice(0, numbersArticle).map(item => {
                  return (<NewsCard
                    title={item.title}
                    text={item.description}
                    source={item.source.name}
                    toggleLoginForm={toggleLoginForm}
                    loggedIn={loggedIn}
                    image={item.urlToImage}
                    key={Math.random() * 10000000}
                    item={item}
                    date={myData.toAtticle(item.publishedAt.substring(0, 10))}
                    link={item.url}
                    keyword={keyword}
                  />);
                }) : articles.slice(0, numbersArticle).map(item => {
                  return (<NewsCard
                    title={item.title}
                    text={item.description}
                    author={item.source.name}
                    toggleLoginForm={toggleLoginForm}
                    loggedIn={loggedIn}
                    image={item.urlToImage}
                    key={Math.random() * 10000000}
                    item={item}
                    date={myData.toAtticle(item.publishedAt.substring(0, 10))}
                    link={item.url}
                  />);
                })}
          </>
            : ''
          }
        </div>
        {(main && (numbersArticle < articles.length))
          ? <button onClick={handleAddArticles} className='results__add'>Показать еще</button> : ''
        }
      </div>
    </div>
  );
};

export default React.memo(Results);
