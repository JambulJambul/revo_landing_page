import { useState, useEffect } from 'react';
import RevoImg from "../../assets/revo-horizontal.png";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`fixed z-10 w-full transition duration-300 ${isScrolled || isOpen ? 'bg-indigo-200' : 'bg-transparent'}`}>
                <div className="flex justify-between px-12 2xl:px-0 max-w-[1440px] mx-auto">
                    <div className="flex">
                        <Link to={"/"}>
                            <img className="w-36" src={RevoImg} alt="revo creative company logo" />
                        </Link>
                    </div>
                    <div className="lg:hidden my-auto">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800 border-none">
                            <MenuIcon />
                        </button>
                    </div>
                    <div className={`hidden lg:flex`}>
                        {/* <button onClick={() => scrollToSection('HomeProducts')} className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
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
                        </button> */}
                        <button className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <Link to={"/"}>
                                <p>Home</p>
                            </Link>
                        </button>
                        <button className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <Link to={"/portfolio"}>
                                <p>Portfolio</p>
                            </Link>
                        </button>
                        <button className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600">
                            <Link to={"/contact-us"}>
                                <p>Contact Us</p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="mx-auto lg:hidden">
                        <div className='px-12 py-2'>
                            <div onClick={toggleMenu} className='my-2 py-2'>
                                <Link to={"/"} className="transition-colors duration-300 hover:text-gray-600" href="">
                                    <p>Home</p>
                                </Link>
                            </div>
                            <div onClick={toggleMenu} className='my-2 py-2'>
                                <Link to={"/portfolio"} className="transition-colors duration-300 hover:text-gray-600">
                                    <p>Portfolio</p>
                                </Link>
                            </div>
                            <div onClick={toggleMenu} className='my-2 py-2'>
                                <Link to={"/contact-us"} className="transition-colors duration-300 hover:text-gray-600">
                                    <p>Contact Us</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
