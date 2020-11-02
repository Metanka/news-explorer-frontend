import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';


const Footer = () => {

  return (
    <div className='footer'>
      <p className='footer__censure'>© 2020 Supersite, Powered by News API</p>
      <div className='footer__box'>
        <ul className='footer__menu'>
          <NavLink to='/' className='footer__link'>
            Главная
        </NavLink>
          <a href='https://praktikum.yandex.ru/' className='footer__link'>
            Яндекс.Практикум
        </a>
        </ul>
        <ul className='footer__social'>
          <li className='footer__item'>
            <a href='https://github.com/Metanka'>
              <img src={github} alt='github link' />
            </a>
          </li>
          <li className='footer__item'>
            <a href='https://ru-ru.facebook.com/'>
              <img src={fb} alt='facebook link' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Footer);