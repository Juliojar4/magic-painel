import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/navegation/index'
import reportWebVitals from './reportWebVitals';
import ThemeContext from './utility/context/index';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeContext>
          <Navigation/>        
          <App />
        </ThemeContext>  
      </BrowserRouter>  
    </React.StrictMode>
);

reportWebVitals();
