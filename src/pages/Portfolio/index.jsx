import PortfolioCard from './components/PortfolioCard';
import DapurEmakUI from '../../assets/dapur-emak.png'
import NurfahmiDaycareUI from '../../assets/nurfahmi-daycare.png'
// import WikaUI from '../../assets/wika-ui.jpg'
import BpjphUI from '../../assets/bpjph-ui.png'
import AortaUI from '../../assets/aortastan.png'
import EliteryUI from '../../assets/elitery.png'
import IrEliteryUI from '../../assets/ir-elitery.png'
import ElicoveryUI from '../../assets/elicovery.png'
import MunajatUI from '../../assets/munajat-ui.png'
import TbWarriorUi from '../../assets/tbwarrior.png'
// import WikaLogo from '../../assets/wika-rekon-logo.jpg';
import BpjphLogo from '../../assets/bpjph-logo.svg'
import NurfahmiLogo from '../../assets/nurfahmi-logo.png'
import AortaLogo from '../../assets/aortastan-logo.png'
import EliteryLogo from '../../assets/ELITERY-LOGO-Black-2022.png'
import MunajatLogo from '../../assets/munajat-logo.webp'
import TbWarriorLogo from '../../assets/tbwarrior-logo.webp'
import ReactGA from "react-ga4";

const portfolioItems = [
    // {
    //     id: 1,
    //     title: 'Wika Rekon Koperasi',
    //     subtitle: 'Management system web application',
    //     imgUrl: WikaUI,
    //     companyLogo: WikaLogo,
    //     companyUrl: "https://wikarekon.co.id/id/"
    // },
    {
        id: 2,
        title: 'Kamus Halal BPJPH',
        subtitle: 'Directory website for halal products',
        imgUrl: BpjphUI,
        companyLogo: BpjphLogo,
        companyUrl: "https://bpjph.halal.go.id/"
    },
    {
        id: 3,
        title: 'Aortastan',
        subtitle: 'Website landing page for higher education',
        imgUrl: AortaUI,
        companyLogo: AortaLogo,
        companyUrl: "https://aortastan.com/"

    },
    {
        id: 4,
        title: 'Elitery',
        subtitle: 'Website landing page for IT provider',
        imgUrl: EliteryUI,
        companyLogo: EliteryLogo,
        companyUrl: "https://elitery.com/"

    },
    {
        id: 5,
        title: 'Elitery IR',
        subtitle: 'Microsite for investor relations',
        imgUrl: IrEliteryUI,
        companyLogo: EliteryLogo,
        companyUrl: "https://ir.elitery.com"

    },
    {
        id: 6,
        title: 'Elicovery',
        subtitle: 'Microsite for investor relations',
        imgUrl: ElicoveryUI,
        companyLogo: EliteryLogo,
        companyUrl: "https://elicovery.elitery.com"

    },
    {
        id: 7,
        title: 'Munajat',
        subtitle: 'Website for online yasin e-book creation',
        imgUrl: MunajatUI,
        companyLogo: MunajatLogo,
        companyUrl: "https://munajat.id/"

    },
    {
        id: 8,
        title: 'TB Warrior',
        subtitle: 'Android App for TBC survivor',
        imgUrl: TbWarriorUi,
        companyLogo: TbWarriorLogo,
        companyUrl: "https://tbwarrior.id/"

    },
    {
        id: 9,
        title: 'Nurfahmi Daycare',
        subtitle: 'Website landing page for daycare',
        imgUrl: NurfahmiDaycareUI,
        companyLogo: NurfahmiLogo,
        companyUrl: "https://nurfahmidaycare.com/"

    },
    {
        id: 10,
        title: 'Dapur Emak Ponkel',
        subtitle: 'Android and iOS catering application',
        imgUrl: DapurEmakUI,
        companyLogo: null,
        companyUrl: null

    },
];

function Portfolio() {
    ReactGA.send(
        {
            hitType: "pageview",
            page: "/portfolio",
            title: "Portfolio Page"
        }
    );
    return (
        <>
            <div className='bg-gradient-to-b from-sky-500 to-white'>
                <div className="max-w-[1440px] mx-auto min-h-screen pb-24 pt-24 md:pt-32 lg:pt-40 px-12 2xl:px-0">
                    <h1 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-12">Our Portfolio</h1>
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