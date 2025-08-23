import { useTranslation, Trans } from 'react-i18next'

import { HeroCard } from './HeroCard';
import ScrollVelocity from './ui/scroolText';
import DarkVeil from './ui/BgHero';

const Hero = () => {
    const { t } = useTranslation('common');
    return (
        <div className='bg-transparent' id='hero'>
            <DarkVeil className="absolute inset-0"
                hueShift={252}
                scanlineIntensity={0.59}
                scanlineFrequency={3.4}
                speed={1.5}/>
            <div className="relative z-10">
                <div className='max-w-[1920px] mx-auto px-4 lg:px-16'>
                    <div className="md:flex lg:h-screen">
                        <div className="text-light pt-20 md:flex flex-col justify-center md:w-1/2"
                            >
                            <h1 className='uppercase font-anton text-8xl lg:text-[12rem]'>{t('title')}</h1>
                            <p className='font-courier text-justify leading-7 lg:leading-10 mt-12 lg:text-3xl lg:px-2' >
                                <Trans i18nKey="description.heroP">
                                    Hola, soy Bryan — Product Designer <br /> Desde 2020, diseño productos digitales que no solo resuelven problemas, sino que conectan con las personas.
                                </Trans>
                            </p>
                        </div>
                        <div className="mt-16 lg:mt-0 md:w-1/2 flex justify-center items-center">
                            <HeroCard />
                            {/*<img src={bgImg} alt="" className='w-2/3 lg:w-1/2 lg:rotate-6'/>*/}
                        </div>
                    </div>
                    <ScrollVelocity
                        texts={['- If in doubt, flat out']}
                        velocity={80}
                        className="custom-scroll-text border-y-[1px] border-red "
                    />
                </div>
            </div>
        </div>
    )
}
export default Hero