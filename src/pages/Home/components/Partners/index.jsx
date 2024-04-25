import WikaLogo from '../../../../assets/wika-logo.png'
import Bpjph from '../../../../assets/bpjph-logo.png'

function HomePartners() {
    return (
        <>
            <div className="text-center mx-12 my-12">
                <h2 className="text-4xl text-gray-600">Our Partners</h2>
                <div className='flex flex-col md:flex-row items-center md:justify-center my-10 md:gap-x-24'>
                    <img className='w-32 mt-10 md:mt-0 md:w-48 lg:w-64 object-contain' src={WikaLogo} alt="Wika Rekon Logo" />
                    <img className='w-32 mt-10 md:mt-0 md:w-48 lg:w-64 object-contain' src={Bpjph} alt="Npjph" />
                </div>
            </div>
        </>
    )
}

export default HomePartners