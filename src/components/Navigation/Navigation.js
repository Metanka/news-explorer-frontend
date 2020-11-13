import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Navigation.css';

const Navigation = ({
  theme, 
  toggleForm, 
  loggedIn, 
  handleLoginOut, 
  name, 
  isPopupOpen, 
  handleBurger, 
  isMenuOpen}) => {
  const history = useHistory();

  const handleCircle = () => {
    handleBurger();
    toggleForm();
  }

  const handleCircleOut = () => {
    handleLoginOut()
    history.push('/');
  }
  return (
    <>
      {isPopupOpen ? '' :
        <div onClick={handleBurger} className={`header__button-group ${isMenuOpen ? 'change' : ''}`}>
          <span className={`header__button-line ${theme ? '' : 'header__button-line_black'} ${isMenuOpen ? 'header__button-line_esc header__button-line_white' : ''}`}></span>
          <span className={`header__button-line ${theme ? '' : 'header__button-line_black'} ${isMenuOpen ? 'header__button-line_esc header__button-line_white' : ''}`}></span>
        </div>
      }
      <nav className={isMenuOpen ? 'header__box header__box_visible' : 'header__box'}>
        {/* NavLink во многом аналогичен Link за тем исключением, что позволяет использовать состояние ссылки */}
        <NavLink to='/'
          className=
          {`header__link 
          ${theme ?
              'header_light-theme header__link_active header__link_active_light-theme' : ''}
          ${isMenuOpen ?
              'header_light-theme' : ''}`
          }>Главная</NavLink>
        {loggedIn ?
          <NavLink to='/saved-news'
            className={`header__link 
            ${theme ? 'header_light-theme' : 'header__link_active'} 
            ${isMenuOpen ? 'header_light-theme' : ''}`
            }>Сохраненные статьи</NavLink> : ''
        }
        <span
          onClick={loggedIn ? handleCircleOut : handleCircle}
          className={`header__circle ${theme ? 'header_light-theme' : 'header__circle_dark'} 
    ${isMenuOpen ? 'header__circle_light' : ''} `}
        >
          <span className={`header__circle-link ${(isMenuOpen || theme) ? 'header_light-theme' : ''}`} >
            {name ? name : 'Авторизоваться'}
          </span>
          {
            name ?
              <span className={`header__logout ${theme? 'header__logout_white' : ''} `} /> : ''
          }
        </span>
      </nav>
    </>
  );
}

export default React.memo(Navigation);