import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';
import ContactUsImage from '../../assets/undraw_contact_us.svg'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { indigo } from '@mui/material/colors';

const defaultIcon = L.icon({
    iconUrl: markerIconPng,
    shadowUrl: 'leaflet/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ContactUs() {
    return (
        <>
            <div className="max-w-[1440px] mx-auto min-h-screen pb-24 pt-24 md:pt-32 lg:pt-40 px-12 2xl:px-0">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-800 to-indigo-950 bg-clip-text text-transparent mb-12 drop-shadow-md">
                    Contact Us
                </h1>
                <div className='xl:flex xl:gap-48'>
                    <div className='flex-1'>
                        <div>
                            <div className='flex justify-center'>
                                <img className='h-80 rounded-xl p-12' src={ContactUsImage} alt="" />
                            </div>
                            <div>
                                <div className="transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px] flex justify-center my-8">
                                    <a href="https://wa.link/fjj377" target="_blank" className='w-full'>
                                        <div className="bg-blue-400 py-4 px-6 rounded-lg shadow-xl">
                                            <div className='flex items-center justify-center'>
                                                <WhatsAppIcon sx={{ color: indigo[50] }} fontSize="large" />
                                                <p className='pl-4 text-sm lg:text-base text-white'>Whatsapp</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px] flex justify-center my-8">
                                    <a href="https://www.instagram.com/r.evocreative_id/" target="_blank" className='w-full'>
                                        <div className="bg-blue-400 py-4 px-6 rounded-lg shadow-xl">
                                            <div className='flex items-center justify-center'>
                                                <InstagramIcon sx={{ color: indigo[50] }} fontSize="large" />
                                                <p className='pl-4 text-sm lg:text-base text-white'>Instagram</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px] flex justify-center my-8">
                                    <a href="mailto:rajawalicakradigdaya@gmail.com" target="_blank" className='w-full'>
                                        <div className="bg-blue-400 py-4 px-6 rounded-lg  shadow-xl">
                                            <div className='flex items-center justify-center'>
                                                <EmailIcon sx={{ color: indigo[50] }} fontSize="large" />
                                                <p className='pl-4 text-sm lg:text-base text-white'>rajawalicakradigdaya@gmail.com</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center flex-1 py-10 xl:py-0">
                        <div className=" text-gray-700 mb-8">
                            <h3 className="text-md md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-indigo-800 to-indigo-950 bg-clip-text text-transparent mb-4">Our Address</h3>
                            <p className="text-sm lg:text-base text-center text-gray-600">Jl. Raya Pd. Gede No.14A Pinang Ranti, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13560</p>
                        </div>
                        <MapContainer
                            center={[-6.2907448, 106.8862124]}
                            zoom={14}
                            className="w-full h-[500px] rounded-lg shadow-lg"
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[-6.2907448, 106.8862124]} icon={defaultIcon}>
                                <Popup>
                                    Revo Creative Head Office
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
