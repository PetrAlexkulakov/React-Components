import React from 'react';

const Header = (props: { title: string }) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
