import React from 'react';
import styles from './style.module.css';

function Header({children}) {
  return (
    <div>
      <header className= {styles.header}>
        {children}
      </header>
    </div>
  );
}
export default Header;
