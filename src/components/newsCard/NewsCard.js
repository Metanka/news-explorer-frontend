import React from 'react';
import './NewsCard.css';
import { api } from '../../utils/Api';

const NewsCard = ({
  isSaved, tag, id, title, text, source, image, date, link,
  keyword, setSavedArticles, loggedIn
}) => {
  const [isDelete, setIsDelete] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleTrash = () => {
    setIsDelete(!isDelete);
  };
  const handleDelete = () => {
    api.deleteArticle(id)
      .then(() => {
        api.getAllArticles()
          .then(data => {
            setSavedArticles(data);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.warn(err));
  };
  const handleFavourite = () => {
    api.saveArticle(keyword, title, text, date, source, link, image)
      .then(() => setIsFavourite(!isFavourite))
      .catch(err => console.warn(err));
  };

  return (
    <div className="card">
      {
        tag
          ? <span className='card__tag card__tag_position-left'>{tag}</span>
          : ''
      }

      <span onClick={handleDelete} className={`card__tag card__tag_position-right ${isDelete ? 'card__tag_visible' : ''}`}>Убрать из сохраненных</span>
      <button disabled={!loggedIn}
        onClick={isSaved ? handleTrash : handleFavourite}
        className={tag
          ? 'card__trash'
          : `card__favourite ${isFavourite ? 'card__favourite_active' : ''}`
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
};

export default React.memo(NewsCard);
