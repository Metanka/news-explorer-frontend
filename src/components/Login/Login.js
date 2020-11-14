import React from 'react';
import {useHistory} from 'react-router-dom';
import {useFormWithValidation} from '../../utils/validationForm';
import './Login.css';

const Login = ({isConfirm, 
  setErrorMessage, 
  isPopupOpen, 
  toggleForm, 
  onLoginSubmit, 
  setIsRegisterOpen,
}) => {
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const history = useHistory();
  const validate = useFormWithValidation();

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        toggleForm();
      }
    });
  }, [toggleForm, isPopupOpen]);

  const handleEmailChange = (e) => {
    setLoginEmail(e.target.value);
    validate.handleChange(e);
  }

  const handlePasswordChange = (e) => {
    setLoginPassword(e.target.value);
    validate.handleChange(e);
  }

  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      toggleForm();
      validate.resetForm();
    }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(loginEmail, loginPassword);
    history.push('/');
  }

  const handleLink = () => {
    setIsRegisterOpen(true);
    setErrorMessage('');
    toggleForm();
  }

  return (
    <div onClick={handleClose}
      className={`popup popup_login ${isPopupOpen ? '' : 'popup_hidden'}`}>
      <form onSubmit={useFormWithValidation} className={`popup__container popup__container_login`} >
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
                <span className="popup__input_text_error">{validate.errors.email}</span>
              </div>
              <div className="input__box">
                <span className='input__type'>Пароль</span>
                <input
                  onChange={handlePasswordChange}
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Введите пароль'
                  required
                  minLength='8'
                  className="popup__input"
                />
                <span className="popup__input_text_error">{validate.errors.password}</span>
              </div>
            </>
            <button
              type="submit"
              className={validate.isValid ? 'popup__btn popup__btn_active' : 'popup__btn'}
              onClick={handleLoginSubmit}
              disabled={!validate.isValid}
            >
              Войти
          </button>
          </>
        }
        <span className='popup__help'>Или
          <span onClick={handleLink} className='popup__link'> Зарегистрироваться</span>
        </span>
      </form>
    </div >
  )
}

export default React.memo(Login);