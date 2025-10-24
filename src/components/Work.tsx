import {useTranslation} from 'react-i18next'
import StriveCard from './ui/StriveCard';
import HaloCard from './ui/HaloGroundCommand';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Work = () => {
    const { t } = useTranslation('common');
  return (
    <div className="max-w-[1920px] mx-auto mt-30 px-4 md:px-8 lg:px-16" id='work' data-aos="fade-right">
        <h3 className="font-anton text-5xl text-light">[ WORK ]</h3>
        <p className='text-light font-courier mt-8 text-justify md:w-2/3 lg:w-1/3 lg:text-2xl'>{t ('description.workP')}</p>
        <div className="pt-30 flex items-center flex-col gap-y-8" 
        data-aos="fade-up"
        data-aos-delay="200">
            <StriveCard data-aos="fade-up" />
            <HaloCard data-aos="fade-up" />
            {/*<div className='flex flex-col gap-16 lg:gap-5 lg:py-5 py-16 items-center lg:flex-row lg:justify-center'>
                <CardTest />
                <CardTest />
            </div>*/}
        </div>
    </div>
  )
}
AOS.init();
export default Work