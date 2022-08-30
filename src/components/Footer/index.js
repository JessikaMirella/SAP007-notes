import React from 'react';
import styles from './style.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
       Desenvolvido por<br></br><a href="https://github.com/JessikaMirella" target="_blank" rel="noreferrer">Jéssika Mirella</a>
      </p>
    </footer>
  );
}

export default Footer;