import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({theme, toggleForm, isSaved, name, isPopupOpen}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleBurger = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  return (
    <div className='header'>
      <div className='header__container'>
        <h2 className={`header__title ${theme ? 'header_light-theme' : ''} ${isMenuOpen ? 'header_light-theme' : ''}`}>NewsExplorer</h2>
        <Navigation
          theme={theme}
          toggleForm={toggleForm}
          isSaved={isSaved} name={name}
          isPopupOpen={isPopupOpen} 
          handleBurger={handleBurger}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </div >
  );
}

export default React.memo(Header);