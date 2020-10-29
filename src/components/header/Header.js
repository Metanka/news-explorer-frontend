import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBurger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <div className='header__container'>
        <p className='header__title header_light-theme'>NewsExplorer</p>
        <div onClick={handleBurger} className={`header__button-group ${isOpen ? 'change' : ''}`}>
          <span className={`header__button-line ${isOpen ? 'header__button-line_esc' : ''}`}></span>
          <span className={`header__button-line ${isOpen ? 'header__button-line_esc' : ''}`}></span>
        </div>
        <nav className={isOpen ? 'header__box header__box_visible' : 'header__box'}>
          {/* NavLink во многом аналогичен Link за тем исключением, что позволяет использовать состояние ссылки */}
          <Link to='/' className={`header__link header_light-theme ${isOpen ? '' : 'header__link_active header__link_active_light-theme'} `}>Главная</Link>
          <Link to='/' className='header__link header_light-theme header__circle'>Авторизоваться</Link>
        </nav>
    </div>
    </div >
  );
}

export default React.memo(Header);