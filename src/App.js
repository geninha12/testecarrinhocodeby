import React from 'react';
import './App.css';
import CardCarrinho from './components/CardCarrinho';
import Home from './components/Home';
import './components/style.css'


function App() {
  
  return (
    <div className='main-container'>
      <Home />
      <CardCarrinho />
    </div>
  
    );
}

export default App;
