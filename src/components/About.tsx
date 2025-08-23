import { useTranslation} from 'react-i18next'
import Polaroid from '../assets/polaroid.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const { t } = useTranslation('common');
    return (
        <div className="max-w-[1920px] mx-auto mt-30 px-4 md:px-8 lg:px-16" id='about'>
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <img src={Polaroid} className='md:w-2/3 lg:p-18 lg:w-1/2  lg:sticky lg:top-18' data-aos="fade-right" alt="" />
                <div className='text-light flex flex-col gap-12 about-section py-18 md:px-18'data-aos="fade-left" data-aos-delay="300">
                    <h3 className='font-anton text-2xl'>{t("about.title")}</h3>
                    <p>{t("about.p1")}</p>
                    <p>{t("about.p2")}</p>
                    <h4 className='text-red font-anton tracking-[.2em] md:tra text-xl uppercase'>{t("about.subtitle")}</h4>
                    <p>{t("about.p3")}</p>
                    <p>{t("about.p4")}</p>
                </div>
            </div>
        </div>
    )
}
AOS.init();
export default About