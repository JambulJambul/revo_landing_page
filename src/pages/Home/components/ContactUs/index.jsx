import Dots from '../../../../assets/dots.png'

function HomeContactUs() {
    return (
        <>
            <div id="HomeContactUs" className='bg-slate-50' style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className='max-w-[1440px] mx-auto'>
                    <div className="py-16 md:py-20 lg:py-24 px-12 2xl:px-0 md:flex justify-between">
                        <div className='md:w-2/3'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-indigo-950 font-semibold py-6 md:py-8 lg:py-10">Build Your Business With Us</h2>
                            <p className="text-sm lg:text-base my-4 text-gray-600 ">
                                Unlock your potential with our innovative IT solutions and dedicated support. Contact us today to start your journey towards success.
                            </p>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center pt-10 md:pt-0">
                            <div className="transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px]">
                                <a href="">
                                    <div className="bg-blue-400 py-4 px-6 rounded-lg inline-block shadow-xl">
                                        <p className="text-white">
                                            Contact Us
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContactUs

// import NaturalPattern from '../../../../assets/natural-pattern.svg'
// style={{ backgroundImage: `url(${NaturalPattern})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}