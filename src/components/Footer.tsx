import { useTranslation, Trans } from "react-i18next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const { } = useTranslation('common');
    return (
        <div className="max-w-[1920px] mx-auto px-4 lg:px-16 bg-dark bg-[url(./assets/bg-footer.webp)] bg-cover bg-blend-lighten my-20 lg:mb-0" id="contact">
            <div className="flex justify-center py-18 flex-col">
                <p className="font-anton text-light text-center uppercase tracking-[.3em] text-xl"data-aos="fade-down">
                    <Trans i18nKey="description.footer">
                        ¿Interesado en trabajar <br /> juntos?
                    </Trans>
                   
                </p> 
                <h4 className="text-red text-center mt-8 text-xl tracking-wider font-medium">
                        bryan_avina@hotmail.com
                    </h4>
                {/*
                <section className="links flex flex-col items-center gap-8 text-light capitalize mt-20 lg:flex-row lg:justify-center">
                    <a href="" className="" >instagram</a>
                    <a href="" className="" >linkedin</a>
                    <a href="" className="" >behance</a>
                </section> */}
                <p className="text-white text-center footer-text font-anton mt-30 text-sm">
                    <Trans i18nKey="description.footer2">[ Sometimes <span>“forever”</span>  is just a second. ]</Trans>
                </p>
            </div>
        </div>
    )
}
AOS.init();
export default Footer