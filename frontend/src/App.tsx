import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes />
    </BrowserRouter>
  );
}

export default App;
