import { Routes, Route } from 'react-router-dom';

import AboutUs from '../pages/About';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Portfolio from '../pages/Portfolio';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about-us" element={<AboutUs />} /> */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;