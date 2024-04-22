import { useState } from 'react';
import RevoImg from "../../assets/revo-horizontal.png";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='fixed z-10 w-full'>
                <div className="flex bg-cyan-100 justify-between px-10 py-2">
                    <div className="flex">
                        <a href="">
                            <img className="w-36" src={RevoImg} alt="" />
                        </a>
                    </div>
                    <div className="lg:hidden my-auto">
                        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-800 hover:border-gray-800">
                            <MenuIcon />
                        </button>
                    </div>
                    <div className={`hidden lg:flex`}>
                        <a className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600" href="">
                            <p>
                                About
                            </p>
                        </a>
                        <a className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600" href="">
                            <p>
                                Contact Us
                            </p>
                        </a>
                        <a className="my-auto mx-4 py-4 px-6 transition-colors duration-300 hover:text-gray-600" href="">
                            <p>
                                Contact Us
                            </p>
                        </a>
                    </div>
                </div>
                <div className='bg-cyan-100'>
                    <div className={`mx-auto lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                        <div className='px-10 py-2'>
                            <div className='my-2 py-2'>
                                <a className=" transition-colors duration-300 hover:text-gray-600" href="">
                                    <p>
                                        About
                                    </p>
                                </a>
                            </div>
                            <div className='my-2 py-2'>
                                <a className=" transition-colors duration-300 hover:text-gray-600" href="">
                                    <p>
                                        Contact Us
                                    </p>
                                </a>
                            </div>
                            <div className='my-2 py-2'>
                                <a className=" transition-colors duration-300 hover:text-gray-600" href="">
                                    <p>
                                        Contact Us
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
