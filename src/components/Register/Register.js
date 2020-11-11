import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Register.css';

const Register = ({isConfirm, isLogin, isPopupOpen, toggleForm, onLoginSubmit}) => {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        toggleForm();
      }
    });
  }, [toggleForm, isPopupOpen]);

  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
  }

  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      toggleForm();
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(loginEmail, loginPassword);
    history.push('/');
  }

  return (
    <div onClick={handleClose}
      className={`popup popup_login ${isPopupOpen ? '' : 'popup_hidden'}`}>
      <form className={`popup__container popup__container_login`} >
        <button onClick={toggleForm} className={`btn-close btn-close_login`} type='button' />
        <h2 className={`popup__title`}>Вход</h2>
        {isConfirm ? '' :
          <>
            <>
              <div className="input__box">
                <span className='input__type'>Email</span>
                <input
                  onChange={handleEmailChange}
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
                  onChange={handlePasswordChange}
                  id='password'
                  name='password'
                  type='text'
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
              onClick={handleLoginSubmit}
            >
              Войти
          </button>
          </>
        }
        <span className='popup__help'>Или
          <NavLink to='/' className='popup__link'> Зарегистрироваться</NavLink>
        </span>
      </form>
    </div >
  )
}

export default React.memo(Register);