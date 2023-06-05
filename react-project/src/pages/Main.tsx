import React from 'react';
import Header from '../components/Header/Header';
import CardsList from '../components/Cards/CardsList';

const Main = () => {
  return (
    <div>
      <Header title="All Cards" />
      <CardsList />
    </div>
  );
};

export default Main;
