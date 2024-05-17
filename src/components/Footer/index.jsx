import RevoImg from '../../assets/revo-horizontal.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='bg-indigo-200'>
                <div className="flex flex-col lg:flex-row gap-12 justify-around py-12 px-12 2xl:px-0 max-w-[1440px] mx-auto">
                    <div className="flex-1">
                        <a href="https://wa.link/fjj377" target="_blank">
                            <img className='h-24 inline-block' src={RevoImg} alt="revo creative company logo" />
                        </a>
                        <h4 className='text-xl leading-relaxed pt-4'>
                            Office Address
                        </h4>
                        <p className='leading-relaxed'>
                            Jl. Raya Pd. Gede No.14A Pinang Ranti, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13560<br />
                        </p>
                    </div>
                    <div className="flex-1">
                        <h4 className='text-xl leading-relaxed'>
                            Sections
                        </h4>
                        <ul className='leading-relaxed'>
                            <li className='my-2 mt-4'>
                                <button onClick={() => scrollToSection('HomeHero')} className="hover:underline transition duration-300 ease-in-out" href=""><p>Home</p></button>
                            </li>
                            <li className='my-2'>
                                <button onClick={() => scrollToSection('HomeProducts')} className="hover:underline transition duration-300 ease-in-out" href=""><p>Products</p></button>
                            </li>
                            <li className='my-2'>
                                <button onClick={() => scrollToSection('HomePartners')} className="hover:underline transition duration-300 ease-in-out" href="">Partners</button>
                            </li>
                            <li className='my-2'>
                                <button onClick={() => scrollToSection('HomeWhyUs')} className="hover:underline transition duration-300 ease-in-out" href=""><p>Why Us</p></button>
                            </li>
                            <li className='my-2'>
                                <button onClick={() => scrollToSection('HomeContactUs')} className="hover:underline transition duration-300 ease-in-out" href="">Contact Us</button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h4 className='text-xl'>
                            Contact Us
                            <div className='flex gap-3'>
                                <a href="https://www.instagram.com/r.evocreative_id/">
                                    <InstagramIcon />
                                </a>
                                <a href="https://wa.link/fjj377">
                                    <WhatsAppIcon />
                                </a>
                            </div>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer