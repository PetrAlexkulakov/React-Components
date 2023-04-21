import './styles/App.css';
import React from 'react';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/UI/AppRouter';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
