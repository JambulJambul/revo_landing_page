import StartBuilding from '../../../../assets/undraw_start_building_re_xani.svg' 

function HomeHero() {
    return (
        <>
            <div id='HomeHero' className='bg-gradient-to-b from-indigo-300'>
                <div className="lg:h-[70vh] max-w-[1440px] mx-auto ">
                    <div className="pb-24 lg:pb-0 pt-36 md:pt-40 lg:pt-48 px-12 2xl:px-0 block lg:flex">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl my-4 font-semibold text-indigo-950">
                                Evolve Your Business With Our IT Solutions
                            </h2>
                            <h4 className="text-base md:text-lg lg:text-xl my-4 font-extralight pt-6 text-gray-600">
                            Elevate your operations, enhance security, and boost efficiency with our expert consultation.
                            </h4>
                            <div className="mt-12 lg:mt-24 transition duration-200 ease-in-out hover:transform hover:translate-y-[-5px]">
                                <a href="https://wa.link/fjj377" target="_blank">
                                    <div className="bg-blue-400 py-3 px-4 md:py-4 md:px-6 rounded-lg inline-block shadow-xl">
                                        <p className="text-white text-sm md:text-base">
                                            Contact Us
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img className='object-object-contain h-96' src={StartBuilding} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHero