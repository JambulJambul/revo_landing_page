import WikaLogo from '../../../../assets/wika-rekon-logo-removebg.webp';
import BpjphLogo from '../../../../assets/bpjph-logo.svg'
import NurfahmiLogo from '../../../../assets/nurfahmi-logo.png'
import AortaLogo from '../../../../assets/aortastan-logo-removebg.webp'
import EliteryLogo from '../../../../assets/ELITERY-LOGO-Black-2022.png'
import MunajatLogo from '../../../../assets/munajat-logo.webp'
import TbWarriorLogo from '../../../../assets/tbwarrior-logo.webp'
import Dots from '../../../../assets/dots.png'
import Marquee from "react-fast-marquee";
import LogoItem from './components/logo-item';

function HomePartners() {
    return (
        <>
            <div id="HomePartners" className='bg-slate-50' style={{ backgroundImage: `url(${Dots})`, backgroundRepeat: 'repeat', backgroundSize: 'contain' }}>
                <div className='max-w-[1440px] mx-auto py-10'>
                    <div className="text-center py-12">
                        <h2 className="drop-shadow-md text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-950">Our Esteemed Partners</h2>
                        <Marquee pauseOnHover={true} autoFill={true} className='pt-12'>
                            <LogoItem href={"https://wikarekon.co.id/id/"} src={WikaLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://bpjph.halal.go.id/"} src={BpjphLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://nurfahmidaycare.com/"} src={NurfahmiLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://aortastan.com/"} src={AortaLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://elitery.com/"} src={EliteryLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://munajat.id/"} src={MunajatLogo} alt={"Wika Rekon Logo"} />
                            <LogoItem href={"https://tbwarrior.id/"} src={TbWarriorLogo} alt={"Wika Rekon Logo"} />
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePartners