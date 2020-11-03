import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notfound'>
      <span className='notfound__img' />
      <h2 className='notfound__title'>Ничего не найдено</h2>
      <p className='notfound__text'>К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  )
}

export default React.memo(NotFound);