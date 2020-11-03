import React from 'react';
import './Preloader.css';
function Preloader({ isContent }) {
  const iconClass = (isContent) ? 'icon-preloader' : 'icon-not';
  const textClass = (isContent) ? 'Идет поиск новостей...' : 'К сожалению по вашему запросу ничего не найдено.';
  return (
    <section className="preloader">
      <i className={iconClass} />
      {(isContent) ? '' : <h3 className="preloader__title">Ничего не найдено</h3>}
      <p className="preloader__paragraph">{textClass}</p>
    </section>
  );
}

export default React.memo(Preloader);
