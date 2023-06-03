import React from 'react';
import classes from './Header.module.scss';

const Header = (props: { title: string }) => {
  return (
    <header>
      <h1 className={classes.header}>{props.title}</h1>
    </header>
  );
};

export default Header;
