import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './pages/List';
import Nav from './components/nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Route path="/" exact component={Home} />

        <Route path="/list" component={List} />
      </BrowserRouter>
    </div>
  );
}

export default App;
