import ComputerHero from '../../../../assets/computer-hero.png'

function HomeHero() {
    return (
        <>
            <div className="lg:h-screen bg-gradient-to-b from-cyan-100">
                <div className="pt-48 mx-12 lg:mx-24 block lg:flex">
                    <div className="flex-1">
                        <h2 className="text-4xl my-4">
                            Improve your business with our IT Solutions
                        </h2>
                        <h4 className="text-2xl my-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit lacinia dolor, sit amet bibendum felis facilisis sed. 
                        </h4>
                        <div className="mt-12 lg:mt-24">
                            <a className="transition-colors duration-300 hover:text-gray-600" href="">
                                <div className="bg-blue-400 py-4 px-6 rounded-lg inline-block">
                                    <p className="text-white">
                                        Contact Us
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img className='object-object-contain h-96 ' src={ComputerHero} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHero