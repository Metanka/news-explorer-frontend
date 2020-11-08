import React from 'react';
import './notFound.css';

function NotFound() {
  return (
    <section className="preloader">
      <i className='icon-not' />
      <h3 className="preloader__title">Ничего не найдено</h3>
      <p className="preloader__paragraph">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default React.memo(NotFound);