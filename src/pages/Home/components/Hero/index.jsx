import StartBuilding from '../../../../assets/undraw_start_building_re_xani.svg' 

function HomeHero() {
    return (
        <>
            <div className='bg-gradient-to-b from-indigo-300'>
                <div className="lg:h-[70vh] max-w-[1440px] mx-auto ">
                    <div className="pt-48 mx-12 2xl:mx-0 block lg:flex">
                        <div className="flex-1">
                            <h2 className="text-6xl my-4 text-indigo-950">
                                Evolve Your Business With Our IT Solutions
                            </h2>
                            <h4 className="text-xl my-4 font-extralight pt-6 text-gray-600">
                            Elevate your operations, enhance security, and boost efficiency with our expert consultation.
                            </h4>
                            <div className="mt-12 lg:mt-24">
                                <a className="transition-colors duration-300 hover:text-gray-600" href="">
                                    <div className="bg-blue-400 py-4 px-6 rounded-lg inline-block shadow-xl">
                                        <p className="text-white">
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