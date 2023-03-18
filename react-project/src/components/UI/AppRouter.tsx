import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';
import Main from '../../pages/Main';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
};

export default AppRouter;
