import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/index.jsx'
import Navbar from './components/Navbar/index.jsx'
import Footer from './components/Footer/index.jsx'
import ScrollToTop from './utils/ScrollToTop/index.jsx';
import ReactGA from "react-ga4";
import './index.css'

ReactGA.initialize("G-S60P6EBJFJ");

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);