import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Home/App.jsx'
import Navbar from './components/Navbar/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
)
