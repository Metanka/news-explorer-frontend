import React from 'react';
import './Results.css';
import NewsCard from '../newsCard/NewsCard';

const Results = ({main, saved}) => {

  return (
    <div className='results'>
      <div className='results__box'>
        {main ?
          <h2 className='results__title'>
            Результаты поиска
      </h2> : ''}
        <div className='cards'>
          {saved ? <>
            <NewsCard isSaved={true} tag={'цветочки'} />
            <NewsCard isSaved={true} tag={'жучки'} />
            <NewsCard isSaved={true} tag={'паучки'} />
            <NewsCard isSaved={true} tag={'лепесточки'} />
            <NewsCard isSaved={true} tag={'грибочки'} />
          </> : ''
          }
          {main ? <>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </>
            : ''
          }
        </div>
        {main ?
          <button className='results__add'>Показать еще</button> : ''
        }
      </div>
    </div>
  );
}

export default React.memo(Results);