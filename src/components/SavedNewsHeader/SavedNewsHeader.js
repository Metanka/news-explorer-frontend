import React from 'react';
import './SavedNewsHeader.css';
import { api } from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const SavedNewsHeader = () => {
  const [number, setNumber] = React.useState();
  const { currentUser } = React.useContext(CurrentUserContext);
  const [uniqueNames, setUniqueNames] = React.useState([]);
  const [name, setName] = React.useState('');

  const getNumberArticles = () => {
    api.getAllArticles()
      .then(res => {
        setNumber(res.length);
        const array = res.map(item => {
          return item.keyword;
        });
        setUniqueNames(array.reduce((a, x) => a.includes(x) ? a : [...a, x], []).sort());
      })
      .catch(err => console.error(err));
  };

  React.useEffect(() => {
    getNumberArticles();
    setName(currentUser.name);
  }, [currentUser]);

  function declOfNum(num, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
  }
  const savedText = declOfNum(number, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);

  return (
    <div className='news'>
      <p className='news__about'>Сохраненные статьи</p>
      <h1 className='news__title'>{`${name}, у вас ${number || 0} ${savedText}`}</h1>
      <span className='news__keys'>По ключевым словам: <span className='tag'>
        {uniqueNames.length === 0 ? '' : `${uniqueNames[0]}, ${uniqueNames[1] ? uniqueNames[1] : ''} и ${(uniqueNames.length - 2) > 0 ? (uniqueNames.length - 2) : 0} другим.`}
      </span>
      </span>
    </div>
  );
};

export default React.memo(SavedNewsHeader);
