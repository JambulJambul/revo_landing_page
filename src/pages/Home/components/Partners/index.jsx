import WikaLogo from '../../../../assets/wika-logo.png'
import Bpjph from '../../../../assets/bpjph-logo.svg'
import Dots from '../../../../assets/dots.png'

function HomePartners() {
    return (
        <>
            <div id="HomePartners" className='bg-slate-50' style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className='max-w-[1440px] mx-auto py-10'>
                    <div className="text-center px-12 2xl:px-0 py-12">
                        <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950">Our Esteemed Partners</h2>
                        <div className='flex flex-col md:flex-row items-center md:justify-center my-10 md:gap-x-24'>
                            <a className='transition duration-200 ease-in-out hover:transform hover:translate-x-[-5px] hover:translate-y-[-5px]' href="https://wikarekon.co.id/id/" target="_blank">
                                <img className='object-contain' src={WikaLogo} alt="Wika Rekon Logo" />
                            </a>
                            <a className='transition duration-200 ease-in-out hover:transform hover:translate-x-[-5px] hover:translate-y-[-5px]' href="https://bpjph.halal.go.id/" target="_blank">
                                <img className='w-64 mt-10 md:mt-0 object-contain' src={Bpjph} alt="Npjph" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePartners