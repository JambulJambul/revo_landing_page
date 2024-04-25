import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PersonIcon from '@mui/icons-material/Person';

function HomeTestimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="bg-cyan-300 py-10 px-12 md:px-24">
            <h2 className="text-4xl text-white text-center">Testimonials</h2>
            <Slider className='mx-12 lg:mx-36' {...settings}>
                <div className='p-10 text-center text-white'>
                    <PersonIcon sx={{ fontSize: 124 }} />
                    <h3 className='text-3xl'>Lamon Legend</h3>
                    <p className='text-xl py-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className='p-10 text-center text-white'>
                    <PersonIcon sx={{ fontSize: 124 }} />
                    <h3 className='text-3xl'>Lamon Legend</h3>
                    <p className='text-xl py-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className='p-10 text-center text-white'>
                    <PersonIcon sx={{ fontSize: 124 }} />
                    <h3 className='text-3xl'>Lamon Legend</h3>
                    <p className='text-xl py-6'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </Slider>
        </div>
    );
}

export default HomeTestimonials;
