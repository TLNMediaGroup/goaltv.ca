// src/App.js

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
