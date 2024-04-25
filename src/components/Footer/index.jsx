import RevoImg from '../../assets/revo-horizontal.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 justify-around bg-cyan-100 py-12 px-24">
                <div className="flex-1">
                    <a href="">
                        <img className='h-24 inline-block' src={RevoImg} alt="revo creative company logo" />
                    </a>
                    <h4 className='text-xl leading-relaxed'>
                        Alamat Kantor
                    </h4>
                    <p className='leading-relaxed'>
                        Jl Rumah Dawe, Pondok Bambu, Jakarta Timur 13460<br />
                        Telp. 021-8066 3030<br />
                    </p>
                </div>
                <div className="flex-1">
                    <h4 className='text-xl leading-relaxed'>
                        Pages
                    </h4>
                    <ul className='leading-relaxed'>
                        <li className='my-2 mt-4'>
                            <a className="hover:underline transition duration-300 ease-in-out" href="">Services</a>
                        </li>
                        <li className='my-2'>
                            <a className="hover:underline transition duration-300 ease-in-out" href="">Portfolio</a>
                        </li>
                        <li className='my-2'>
                            <a className="hover:underline transition duration-300 ease-in-out" href="">About Us</a>
                        </li>
                        <li className='my-2'>
                            <a className="hover:underline transition duration-300 ease-in-out" href="">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <h4 className='text-xl'>
                        Follow Us
                        <div className='flex gap-3'>
                            <a href="">
                                <InstagramIcon />
                            </a>
                            <a href="">
                                <EmailIcon />
                            </a>
                        </div>
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Footer