import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <div className='header'>
      <div className='header__container'>
        <p className='header__title header_light-theme'>NewsExplorer</p>
        <div className='header__box'>
          <p className='header__link header_light-theme header__link_active header__link_active_light-theme'>Главная</p>
          <div className='header__circle'>
            <p className='header__link header_light-theme'>Авторизоваться</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Header);