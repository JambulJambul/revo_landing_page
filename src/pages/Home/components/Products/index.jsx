import ComputerIcon from '../../../../assets/computer-home.svg'
import AdsToa from '../../../../assets/advertising-toa.svg'

function HomeProducts() {
    return (
        <>
            <div className='bg-cyan-300 py-10'>
                <div className="text-center mx-12">
                    <h2 className="text-4xl text-white">Our Products</h2>
                </div>
                <div className="bg-cyan-300 mt-10 md:flex px-12 md:px-16 lg:px-24 gap-3">
                    <div className="flex-1 p-10 m-4 border-white border-2 content-center transition duration-300 hover:bg-cyan-200">
                        <div className='my-4 flex flex-col lg:flex-row text-center lg:text-left justify-center gap-10'>
                            <img src={ComputerIcon} className='h-36 md:h-48 filter brightness-0 invert' alt="" />
                            <div className='my-auto text-white '>
                                <h3 className='text-2xl'>
                                    Software Development
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-10 m-4 align-center border-white border-2 content-center transition duration-300 hover:bg-cyan-200">
                        <div className='my-4 flex flex-col lg:flex-row text-center lg:text-left justify-center gap-10'>
                            <img src={AdsToa} className='h-24 md:h-36 filter brightness-0 invert' alt="" />
                            <div className='my-auto text-white '>
                                <h3 className='text-2xl'>
                                    Advertising
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProducts