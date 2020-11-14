import React from 'react';
import './NewsCard.css';

const NewsCard = ({isSaved, tag, title, text, source, image, date, link, handleFlag, keyword}) => {
  const [isDelete, setIsDelete] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleDelete = () => {
    setIsDelete(!isDelete);
  }
  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
    handleFlag(keyword, title, text, date, source, link, image);
  }
  console.log(handleFlag);
  console.log(JSON.stringify({
    keyword, title, text, date, source, link, image,
  }));
  return (
    <div className="card">
      {
        tag ?
          <span className='card__tag card__tag_position-left'>{tag}</span>
          : ''
      }

      <span className={`card__tag card__tag_position-right ${isDelete ? 'card__tag_visible' : ''}`}>Убрать из сохраненных</span>
      <button onClick={isSaved ? handleDelete : handleFavourite}
        className={tag ?
          'card__favourite card__trash' :
          `card__favourite ${isFavourite ? 'card__favourite_active' : ''}`
        } />
      <a className='card__link' href={link}>
        <img className="card__image" alt='фоновое изображение' src={image} />
        <div className="card__info">
          <p className='card__date'>{date}</p>
          <h2 className="card__title">{title}</h2>
          <p className='card__text'>{text}</p>
          <p className='card__about'>{source}</p>
        </div>
      </a>
    </div>
  );
}

export default React.memo(NewsCard);
