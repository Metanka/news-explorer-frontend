import React from 'react';
import './Footer.css';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';


const Footer = () => {

  return (
    <div className='footer'>
      <p className='footer__censure'>© 2020 Supersite, Powered by News API</p>
      <div className='footer__box'>
        <ul className='footer__menu'>
          <li className='footer__link'>
            Главная
        </li>
          <li className='footer__link'>
            Яндекс.Практикум
        </li>
        </ul>
        <ul className='footer__social'>
          <li className='footer__item'>
            <img src={github} alt='github link' />
          </li>
          <li className='footer__item'>
            <img src={fb} alt='facebook link' />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Footer);