import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from "./components";
import { FilterProvider } from './context';
import { CartProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer/>
        <App />
      </FilterProvider>
      </CartProvider>

    </Router>

  </React.StrictMode>
);


