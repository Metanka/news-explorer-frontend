import React from 'react';
import './Results.css';
import NewsCard from '../newsCard/NewsCard';

const Results = () => {

  return (
    <div className='results'>
      <div className='results__box'>
        <h2 className='results__title'>
          Результаты поиска
      </h2>
        <div className='cards'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <button className='results__add'>Показать еще</button>
      </div>
    </div>
  );
}

export default React.memo(Results);