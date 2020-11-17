import React from 'react';
import './Search.css';
import { useFormWithValidation } from '../../utils/validationForm';

const Search = ({ handleSearch, setSearch }) => {
  const validate = useFormWithValidation();

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    validate.handleChange(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    validate.resetForm();
  };

  return (
    <div className='search'>
      <h1 className='search__title'>Что творится в мире?</h1>
      <p className='search__about'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <form onSubmit={useFormWithValidation} className='search__form'>
        <input
          required
          className='search__input'
          onChange={handleSearchInput}
          placeholder='Политика'
          id='key'
          name='key'
        />
        <span className='search__error'>{validate.errors.key}</span>
        <button onClick={handleSubmit} disabled={!validate.isValid} className='search__button'>Искать</button>
      </form>
    </div>
  );
};

export default React.memo(Search);
