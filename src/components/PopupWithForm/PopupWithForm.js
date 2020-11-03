import React from 'react';
import {NavLink} from 'react-router-dom';
import './PopupWithForm.css';

const PopupWithForm = ({isConfirm, isLogin, isPopupOpen, toggleForm}) => {
  let form = {};

  if (isLogin) {
    form = {
      title: 'Вход',
      button: 'Войти',
      link: 'Зарегистрироваться'
    }
  } else if (isConfirm) {
    form = {
      title: 'Пользователь успешно зарегистрирован!',
      link: 'Войти'
    }
  } else {
    form = {
      title: 'Регистрация',
      button: 'Зарегистрироваться',
      link: 'Войти'
    }
  }

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


  return (
    <div  onClick={handleClose}
    className={`popup popup_login ${isPopupOpen ? '' : 'popup_hidden'}`}>
      <form className={`popup__container popup__container_login`} >
        <button onClick={toggleForm} className={`btn-close btn-close_login`} type='button' />
        <h2 className={`popup__title`}>{form.title}</h2>
        {isConfirm ? '' :
          <>
            <>
              <div className="input__box">
                <span className='input__type'>Email</span>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Введите почту'
                  required
                  className="popup__input"
                />
                <span className="popup__input_text_error" />
              </div>
              <div className="input__box">
                <span className='input__type'>Пароль</span>
                <input
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Введите пароль'
                  required
                  className="popup__input"
                />
                <span className="popup__input_text_error"></span>
              </div>
            </>
            <button
              type="submit"
              className='popup__btn'
            >
              {form.button}
            </button>
          </>
        }

        <span className='popup__help'>{isConfirm ? '' : 'Или '}
          <NavLink to='/' className='popup__link'>{form.link}</NavLink>
        </span>
      </form>


    </div >
  )
}

export default React.memo(PopupWithForm);