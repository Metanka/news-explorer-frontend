import React from 'react';
import './Search.css';

const Search = ({ handleSearch, setSearch }) => {
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <div className='search'>
      <h1 className='search__title'>Что творится в мире?</h1>
      <p className='search__about'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form className='search__form'>
        <input className='search__input' onChange={handleSearchInput} placeholder='Политика'></input>
        <button onClick={handleSubmit} className='search__button'>Искать</button>
      </form>
    </div>
  );
};

export default React.memo(Search);
