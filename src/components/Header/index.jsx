import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.sass';
function Header () {
  return (
    <>
      <header className={style.header}>
        <Link to='/' className={style.logo}>
          <img src='https://www.squadhelp.com/img/logo.png' alt='' />
        </Link>
        <div>
        <Link to='/signin' className={style.link}>Sign In</Link>
        <Link to='/signup' className={style.link}>Sign Up</Link>
        </div>
        
      </header>
    </>
  );
}

export default Header;
