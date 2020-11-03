import React from 'react';
import wallpaper from '../../images/image_08.jpg';
import './NewsCard.css';

const NewsCard = ({ isSaved, tag}) => {
  const [isDelete, setIsDelete] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleDelete = () => {
    setIsDelete(!isDelete);
  }
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <div className="card">
      {
        tag ?
        <span  className='card__tag card__tag_position-left'>{tag}</span>
        : ''
      }
     
      <span className={`card__tag card__tag_position-right ${isDelete ? 'card__tag_visible' : ''}`}>Убрать из сохраненных</span>
      <button onClick={isSaved ? handleDelete : handleFavourite } 
      className={tag ? 
      'card__favourite card__trash' : 
      `card__favourite ${isFavourite ? 'card__favourite_active' : ''}`
      } />
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
