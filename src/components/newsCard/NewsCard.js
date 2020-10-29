import React from 'react';
import wallpaper from '../../images/image_08.jpg';
import './NewsCard.css';

const NewsCard = () => {
  return (
    <div className="card">
      <button className="card__favourite"></button>
      <img className="card__image" alt='фоновое изображение' src={wallpaper} />
      <div className="card__info">
        <p className='card__date'>2 августа, 2019</p>
        <h2 className="card__title">Национальное достояние - парки</h2>
        <p className='card__text'>
          В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
          </p>
        <p className='card__about'>Лента.РУ</p>
      </div>
    </div>
  );
}

export default React.memo(NewsCard);
