import React from 'react';
import Nav from './nav';

const Header = (props) => {
  return (
    <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
      <div className="mdl-layout__header-row portfolio-logo-row">
        <span className="mdl-layout__title">
          <div className="portfolio-logo"></div>
          <span className="mdl-layout__title">Lukatonia Blog</span>
        </span>
      </div>
      <Nav styles="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only"/>
    </header>
  )
};

export default Header;