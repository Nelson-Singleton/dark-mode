import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = props => {
  //shares state with index.
  const {darkMode, setDarkMode} = props

  //function for the onclick event listener. Eventually will change the button class allowing it to shift from left to right.
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>      
      <div className="dark-mode__toggle">
        <div
      //toggles button class
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
