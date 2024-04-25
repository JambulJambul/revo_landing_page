import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import Footer from './components/Footer/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App /> 
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);