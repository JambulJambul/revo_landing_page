import PortfolioCard from './components/PortfolioCard';
import DustBackground from '../../assets/Dust.svg'
import DapurEmak from '../../assets/dapur-emak.png'
import NurfahmiDaycare from '../../assets/nurfahmi-daycare.png'
import WikaUI from '../../assets/wika-rekon-ui.jpg'
import BpjphUI from '../../assets/bpjph-ui.png'
import WikaLogo from '../../assets/wika-logo.png';
import BpjphLogo from '../../assets/bpjph-logo.svg'
import NurfahmiLogo from '../../assets/nurfahmi-logo.png'


const portfolioItems = [
    {
        id: 1,
        title: 'Dapur Emak Mobile Apps',
        subtitle: 'Catering application for mobile apps',
        description: 'Detailed description for Project One.',
        imgUrl: WikaUI,
        companyLogo: WikaLogo,
    },
    {
        id: 2,
        title: 'Nurfahmi Daycare',
        subtitle: 'Daycare center website',
        description: 'Detailed description for Project One.',
        imgUrl: BpjphUI,
        companyLogo: BpjphLogo,

    },
    {
        id: 3,
        title: 'Wika Rekon',
        subtitle: 'Daycare center website',
        description: 'Detailed description for Project One.',
        imgUrl: DapurEmak,
        companyLogo: NurfahmiLogo,

    },
    {
        id: 4,
        title: 'Nurfahmi Daycare',
        subtitle: 'Daycare center website',
        description: 'Detailed description for Project One.',
        imgUrl: NurfahmiDaycare,
        companyLogo: NurfahmiLogo,
    },
];

function Portfolio() {

    return (
        <>

            <div className='bg-indigo-200' style={{ backgroundImage: `url(${DustBackground})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className="max-w-[1440px] mx-auto min-h-screen pt-16 md:pt-24 lg:pt-28 px-12 2xl:px-0">
                    <h1 className="text-3xl font-bold text-slate-800 mb-8">Our Portfolio</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {portfolioItems.map(item => (
                            <PortfolioCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
