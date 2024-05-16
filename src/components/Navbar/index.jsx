import { useState, useEffect } from 'react';
import RevoImg from "../../assets/revo-horizontal.png";
import MenuIcon from '@mui/icons-material/Menu';
import WhatsappLogo from "../../assets/whatsapp-logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={`fixed z-10 w-full transition duration-300 ${isScrolled ? 'bg-indigo-200' : 'bg-transparent'
                }`}>
                <div className="flex justify-between px-12 2xl:px-0 max-w-[1440px] mx-auto">
                    <div className="flex">
                        <Link to="/">
                            <img className="w-36" src={RevoImg} alt="revo creative company logo" />
                        </Link>
                    </div>
                    <div className="lg:hidden my-auto">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800">
                            <MenuIcon />
                        </button>
                    </div>
                    <div className={`hidden lg:flex`}>
                        <Link to="/about-us" className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600" >
                            <p>
                                About Us
                            </p>
                        </Link>
                        <Link to="/contact-us" className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600" >
                            <p>
                                Contact Us
                            </p>
                        </Link>
                    </div>
                </div>
                <div className='bg-cyan-100'>
                    <div className={`mx-auto lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className='px-10 py-2'>
                            <div className='my-2 py-2'>
                                <Link to="/about-us" className="transition-colors duration-300 hover:text-gray-600" >
                                    <p>
                                        About Us
                                    </p>
                                </Link>
                            </div>
                            <div className='my-2 py-2'>
                                <Link to="/contact-us" className="transition-colors duration-300 hover:text-gray-600" >
                                    <p>
                                        Contact Us
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed z-10 text-right right-16 bottom-16 lg:right-32 lg:bottom-32 inline-block'>
                <img className='h-16' src={WhatsappLogo} alt="" />
            </div>
        </>
    );
}

export default Navbar;
