import WikaLogo from '../../../../assets/wika-logo.png'
import Bpjph from '../../../../assets/bpjph-logo.png'

function HomePartners() {
    return (
        <>
            <div className="text-center mx-12">
                <h2 className="text-4xl text-gray-600">Our Partners</h2>
                <div className='flex flex-col md:flex-row items-center md:justify-center my-10 md:gap-x-24'>
                    <img className='w-48 object-contain' src={WikaLogo} alt="" />
                    <img className='w-48 object-contain' src={Bpjph} alt="" />
                </div>
            </div>
        </>
    )
}

export default HomePartners