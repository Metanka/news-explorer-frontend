import React from 'react';
import './Circle.css';

const Circle = () => {
  return (
    <div className='circle'>
      <span className='circle__loader' />
      <span className='circle__text'>Идет поиск новотей...</span>
    </div>
  );
};

export default React.memo(Circle);
