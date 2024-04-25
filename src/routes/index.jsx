import { Routes, Route } from 'react-router-dom';
import React from 'react';

import AboutUs from '../pages/About';
import Home from '../pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    );
}

export default App;