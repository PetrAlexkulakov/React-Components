import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.scss';
import title from '../../../assets/title.png';

const Navbar = () => {
  return (
    <div className={classes.navbar__wrapper}>
      <img src={title} />
      <div className={classes.navbar}>
        <div className={classes.navbar__links}>
          <Link to="/about">About us</Link>
          <Link to="/">Main</Link>
          <Link to="/forms">Forms</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
