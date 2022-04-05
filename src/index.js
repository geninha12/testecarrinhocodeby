import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { CartContext, CartProvider } from './components/CartContext';
//import Context from './src/context/Context';
import CardTest from './components/context/Context'

ReactDOM.render(
    
      <React.StrictMode>
        <CardTest>
          <App />
        </CardTest>
        
      </React.StrictMode>,
  document.getElementById('root')
);
