import React from 'react';

const Header = (props: { title: string }) => {
  return (
    <header>
      <h1 style={{ textAlign: 'center' }}>{props.title}</h1>
    </header>
  );
};

export default Header;
