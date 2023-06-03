import React from 'react';
import Header from '../components/UI/Header/Header';
import CardsList from '../components/CardsList';

const Main = () => {
  return (
    <div>
      <Header title="All Cards" />
      <CardsList />
    </div>
  );
};

export default Main;
