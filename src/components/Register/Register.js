import React from 'react';
import './Register.css';
import { useFormWithValidation } from '../../utils/validationForm';

const Register = ({
  isPopupOpen, setErrorMessage, toggleForm, errorMessage, handleRegistrationSubmit, setIsLoginOpen
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const validate = useFormWithValidation();

  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isPopupOpen) {
        toggleForm();
      }
    });
  }, [toggleForm, isPopupOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validate.handleChange(e);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validate.handleChange(e);
  };

  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      toggleForm();
      validate.resetForm();
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    handleRegistrationSubmit(password, email, name);
    toggleForm();
  };
  const handleLink = () => {
    setIsLoginOpen(true);
    setErrorMessage('');
    toggleForm();
  };

  return (
    <div onClick={handleClose}
      className={`popup popup_login ${isPopupOpen ? '' : 'popup_hidden'}`}>
      <form onSubmit={useFormWithValidation} className={'popup__container popup__container_login'} >
        <button onClick={toggleForm} className={'btn-close btn-close_login'} type='button' />
        <h2 className={'popup__title'}>Регистрация</h2>
        <>
          <>
            <div className="input__box">
              <span className='input__type'>Email</span>
              <input
                onChange={handleEmailChange}
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
                type='password'
                minLength='8'
                placeholder='Введите пароль'
                required
                className="popup__input"
              />
              <span className="popup__input_text_error">{validate.errors.password}</span>
            </div>
            <div className="input__box">
              <span className='input__type'>Имя</span>
              <input
                onChange={handleNameChange}
                type='text'
                placeholder='Введите свое имя'
                required
                className="popup__input"
              />
              <span className="popup__input_text_error"></span>
            </div>
          </>
          <span className="popup__input_text_error">{errorMessage}</span>
          <button
            type="submit"
            className={validate.isValid ? 'popup__btn popup__btn_active' : 'popup__btn'}
            onClick={handleRegisterSubmit}
            disabled={!validate.isValid}
          >
            Зарегистрироваться
          </button>
        </>
        <span className='popup__help'>Или
          <span onClick={handleLink} className='popup__link'> Войти</span>
        </span>
      </form>
    </div >
  );
};

export default React.memo(Register);
