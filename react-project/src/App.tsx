import './styles/App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ margin: '8px' }}>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
