import React from 'react';
import photo from '../../images/IMG.jpg'
import './About.css';

const About = () => {

  return (
    <div className='about'>
      <img className='about__photo' src = {photo}  alt='Профиль автора' />
      <div className='about__box'>
        <h2 className='about__title'>Об авторе</h2>
        <p className='about__info'>Неподражаемая наипрекраснейшая и очень скромная я.</p>
      </div>
    </div>
  );
}

export default React.memo(About);