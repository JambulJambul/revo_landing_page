import { Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutUs from '../pages/About';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    );
}

export default App;