import React from 'react';
import { NavLink } from 'react-router-dom';
import './PopupWithForm.css';

const PopupWithForm = ({ isPopupOpen, toggleForm, setIsLoginOpen }) => {
  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      toggleForm();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        toggleForm();
      }
    });
  }, [toggleForm, isPopupOpen]);

  const handleLink = () => {
    setIsLoginOpen(true);
    toggleForm();
  };

  return (
    <div onClick={handleClose}
      className={`popup popup_login ${isPopupOpen ? '' : 'popup_hidden'}`}>
      <form className={'popup__container popup__container_login'} >
        <button onClick={toggleForm} className={'btn-close btn-close_login'} type='button' />
        <h2 className={'popup__title'}>Пользователь успешно зарегистрирован!</h2>
        <span onClick={handleLink} className='popup__link'>Войти</span>
      </form>

    </div >
  );
};

export default React.memo(PopupWithForm);
