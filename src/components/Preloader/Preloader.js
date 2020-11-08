import React from 'react';
import './Preloader.css';
function Preloader({ isContent }) {
  
  return (
    <section className="preloader">
      <i className='icon-preloader' />
      <p className="preloader__paragraph">Идет поиск новостей...</p>
    </section>
  );
}

export default React.memo(Preloader);
