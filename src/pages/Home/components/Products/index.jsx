import ProgrammerImage from '../../../../assets/undraw_dev_productivity_re_fylf.svg'
import CodeIcon from '../../../../assets/code-square-svgrepo-com.svg'
import MobileIcon from '../../../../assets/mobile-alt-1-svgrepo-com.svg'
import AdsIcon from '../../../../assets/advertisement-svgrepo-com.svg'

function HomeProducts() {
    return (
        <>
            <div id="HomeProducts">
                <div className='max-w-[1440px] mx-auto pt-10 pb-24 px-12 2xl:px-0'>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950">Our Services</h2>
                    </div>
                    <div className="lg:px-0 pt-16 md:pt-24 lg:flex lg:gap-12 2xl:gap-0">
                        <div className='lg:flex-1 flex lg:flex-column justify-center lg:items-center'>
                            <img className='max-h-96 lg:max-h-none lg:h-4/5' src={ProgrammerImage} alt="" />
                        </div>
                        <div className='pt-10 lg:pt-0 lg:flex-1'>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    <img className='h-10' src={MobileIcon} alt="" />
                                    <h3 className='text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent ml-4'>
                                        Mobile App Development
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
                                    Bring your ideas to life. We design and develop user-friendly mobile apps for iOS and Android that engage your audience and drive results.
                                </p>
                            </div>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg my-10'>
                                <div className='flex items-center'>
                                    <img className='h-10' src={CodeIcon} alt="" />
                                    <h3 className='text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent ml-4'>
                                        Web Design & Development
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
                                    Craft a stunning and functional online presence. We create custom websites and web applications that are tailored to your business goals and user experience.
                                </p>
                            </div>
                            <div className='bg-slate-100 px-6 py-10 shadow-lg rounded-lg'>
                                <div className='flex items-center'>
                                    <img className='h-10' src={AdsIcon} alt="" />
                                    <h3 className='text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-indigo-600 to-indigo-950 bg-clip-text text-transparent ml-4'>
                                        Advertising
                                    </h3>
                                </div>
                                <p className='leading-6 text-sm lg:leading-8 lg:text-base text-gray-600 mt-4'>
                                    Reach your target audience and achieve your marketing goals. We develop and manage effective advertising campaigns across various platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProducts