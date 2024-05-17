import { useState, useEffect } from 'react';
import RevoImg from "../../assets/revo-horizontal.png";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={`fixed z-10 w-full transition duration-300 ${isScrolled ? 'bg-indigo-200' : 'bg-transparent'}`}>
                <div className="flex justify-between px-12 2xl:px-0 max-w-[1440px] mx-auto">
                    <div className="flex">
                        <button onClick={() => scrollToSection('HomeHero')}>
                            <img className="w-36" src={RevoImg} alt="revo creative company logo" />
                        </button>
                    </div>
                    <div className={`hidden lg:flex`}>
                        <button onClick={() => scrollToSection('HomeProducts')} className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <p>Products</p>
                        </button>
                        <button onClick={() => scrollToSection('HomePartners')} className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <p>Partners</p>
                        </button>
                        <button onClick={() => scrollToSection('HomeWhyUs')} className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <p>Why Us</p>
                        </button>
                        <button onClick={() => scrollToSection('HomeContactUs')} className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <p>Contact Us</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
