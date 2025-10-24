import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useTranslation, Trans } from "react-i18next"
import historyImg from "../assets/imgHalo/1.webp"
import researchImg from "../assets/imgHalo/2.webp"
import designImg from "../assets/imgHalo/4.webp"
import hashiriLogo from "../assets/imgHalo/3.webp"
import complex from "../assets/imgHalo/6.webp"
import devImg from "../assets/imgHalo/5.webp"
import { Frown, Award, Footprints } from 'lucide-react'
import Footer from "@/components/Footer"
import MenuBarBack from "@/components/ui/MenuBarBack"
import { motion } from "framer-motion"
import SliderHalo from "@/components/ui/SliderHalo"

const Halo = () => {
    const { t } = useTranslation('projectHalo')
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
        >
            <div className="text-light">
                <section className="text-white uppercase  bg-[url(./assets/rowDown.webp)] bg-cover">
                    <div className="h-full flex flex-col items-center bg-gradient-to-t from-dark via-dark/98 to-dark/30 pb-56 pt-38">
                        <h2 className="font-anton text-7xl lg:text-9xl lg:tracking-[.1em]">Halo Builder</h2>
                        <h4 className="font-inter font-bold mt-4 tracking-widest">Ground Command</h4>
                    </div>
                </section>
                <div className="px-5 lg:px-16 max-w-[1820px] mx-auto">
                    <section className="bg-dark flex flex-col lg:flex-row items-center ">
                        <div className="lg:pr-30 font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12">{t("halo.historiTitle")}</h2>
                            <p className="mb-20">{t("halo.histori1")}</p>
                            <p >{t("halo.histori2")}</p>
                        </div>
                        <img src={historyImg} alt="" className="mix-blend-plus-lighter w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                    </section>
                    <section className="flex flex-col lg:flex-row gap-12 my-30">
                        <div className="cardSCHalo">
                            <div className="flex-col flex gap-0 mb-7">
                                <div className="flex gap-4"><Frown className="Card-iconHalo" /><h3 className="h-0">{t("halo.objetiveTitle")}</h3></div>
                                <span><p className=" font-medium text-white">{t("halo.objetiveSubTitle")}</p></span>
                            </div>
                            <ul className="pl-10 list-disc">
                                <li>{t("halo.objetive1")}</li>
                                <li>{t("halo.objetive2")}</li>
                                <li>{t("halo.objetive3")}</li>
                                <li>{t("halo.objetive4")}</li>
                            </ul>
                        </div>
                        <div className="cardSCHalo">
                            <div className="flex-col flex gap-0 mb-7">
                                <div className="flex gap-4"><Frown className="Card-iconHalo" /><h3 className="h-0">{t("halo.problemTitle")}</h3></div>
                                <span><p className=" font-medium text-white">{t("halo.problemSubTitle")}</p></span>
                            </div>
                            <ul className="pl-10 list-disc">
                                <li>{t("halo.problem1")}</li>
                                <li>{t("halo.problem2")}</li>
                                <li>{t("halo.problem3")}</li>
                            </ul>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center ">
                        <img src={researchImg} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                        <div className="lg:pl-30 font-courier leading-[2.3rem] text-justify mt-24">
                            <h2 className="font-anton text-2xl mb-12 text-left">{t("halo.processTitle")}</h2>
                            <p className="mb-3 font-bold text-sky-500">{t("halo.processSubTitle")}</p>
                            <p>
                                <ul className="pl-10 list-disc">
                                <li>{t("halo.process1")}</li>
                                <li>{t("halo.process2")}</li>
                                <li>{t("halo.process3")}</li>
                            </ul>
                            </p>
                            <p className="mb-3 font-bold text-sky-500 mt-6">{t("halo.processSubTitle2")}</p>
                            <p>
                                <ul className="pl-10 list-disc">
                                <li>{t("halo.process4")}</li>
                                <li>{t("halo.process5")}</li>
                                <li>{t("halo.process6")}</li>
                            </ul>
                            </p>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center lg:items-start  mt-36">
                        <div className="lg:pr-30 font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12">{t("halo.definitionTitle")}</h2>
                            <p >{t("halo.definition1")}</p>
                            <p className=" text-indigo-500">{t("halo.definition2")}</p>
                        </div>
                        <img src={hashiriLogo} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0 lg:sticky lg:top-10" />
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center mt-48">
                        <img src={designImg} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                        <div className="lg:pl-30 font-courier text-justify mt-24">
                            <h2 className="font-anton text-2xl mb-12 text-left">{t("halo.designTitle")}</h2>
                            <p className="mb-3 font-bold text-sky-500 mt-6">{t("halo.designSubTitle2")}</p>
                            <p>
                                <ul className="pl-10 list-disc">
                                <li>{t("halo.design1")}</li>
                                <li className="my-4">{t("halo.design2")}</li>
                                <li>{t("halo.design3")}</li>
                            </ul>
                            </p>
                            <p className="mb-3 font-bold text-sky-500 mt-6">{t("halo.designSubTitle2")}</p>
                            <p>
                                <ul className="pl-10 list-disc">
                                <li>{t("halo.design4")}</li>
                                <li className="my-3">{t("halo.design5")}</li>
                                <li>{t("halo.design6")}</li>
                            </ul>
                            </p>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center mt-48">
                        
                        <div className="lg:pr-30 font-courier text-justify mt-24">
                            <h2 className="font-anton text-2xl mb-12 text-left">{t("halo.devTitle")}</h2>
                            <p className="mb-3 font-bold text-sky-500 mt-6">{t("halo.devSubTitle2")}</p>
                            <p>
                                <ul className="pl-10 list-disc">
                                <li>{t("halo.dev1")}</li>
                                <li className="my-4">{t("halo.dev2")}</li>
                                <li>{t("halo.dev3")}</li>
                                <li className="my-4">{t("halo.dev4")}</li>
                            </ul>
                            </p>
                            <p className="mb-3 font-bold text-sky-500 mt-6">{t("halo.devSubTitle2")}</p>
                            <p>
                                <ul className="pl-10 list-disc flex flex-col gap-4">
                                <li><span className="font-bold text-amber-700">{t("halo.dev5")}</span> {t("halo.dev51")}</li>
                                <li><span className="font-bold text-amber-700">{t("halo.dev6")}</span> {t("halo.dev61")}</li>
                                <li><span className="font-bold text-amber-700">{t("halo.dev7")}</span> {t("halo.dev71")}</li>
                            </ul>
                            </p>
                        </div>
                        <img src={devImg} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                    </section>


                    <section className=" flex flex-col lg:flex-row items-center lg:items-start  mt-36">
                        <div className="lg:pr-30 font-courier leading-[2.3rem] text-justify flex flex-col gap-8">
                            <h2 className="font-anton text-2xl mb-12">{t("halo.performanceTitle")}</h2>
                            <p >{t("halo.performance1")}</p>
                            <p className=" text-amber-500">{t("halo.performance2")}</p>
                            <p >{t("halo.performance3")}</p>
                            <p >{t("halo.performance4")}</p>
                        </div>
                        <img src={complex} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0 lg:sticky lg:top-10" />
                    </section>


                    <section className=" flex flex-col lg:flex-row items-center mt-48">
                        <div className=" font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12 text-left">{t("halo.resultsTitle")}</h2>
                            <p className="mb-5">{t("halo.results1")}</p>
                            <p className="mb-20 text-indigo-600">{t("halo.results2")}</p>
                        </div>
                    </section>
                    <SliderHalo />
                    <section className="flex flex-col lg:flex-row gap-12 mt-30">
                        <div className="cardSCHalo">
                            <span className="flex gap-4"><Award className="Card-iconHalo" /><h3>{t("halo.testingTitle")}</h3></span>
                            <p>{t("halo.testing1")}</p>
                        </div>
                        <div className="cardSCHalo">
                            <span className="flex gap-4"><Footprints className="Card-iconHalo" /><h3>{t("halo.nextTitle")}</h3></span>
                            <p className="mb-8">{t("halo.next1")}</p>
                            <p>{t("halo.next2")}</p>
                        </div>
                    </section>
                    
                    <section className="flex justify-center my-48">
                        <div className="p-4 md:p-10 lg:px-20 border-t-3 border-indigo-500 lg:w-3/4">
                            <p className="font-courier text-center">
                                <Trans i18nKey="halo.footerText" ns="projects">
                                    <span className="text-Greenlime"></span>Este proyecto me recordó que un buen diseño de producto no solo se trata de estética o funcionalidad, sino de traducir un sistema complejo en una experiencia comprensible. En este caso, el producto debía respetar las reglas de un juego táctico mientras ofrecía una interfaz fluida y moderna."
                                </Trans>
                            </p>
                        </div>
                    </section>
                </div>
                <Footer />
                <MenuBarBack />
                <LanguageSwitcher />
            </div>
        </motion.div>
    )
}
export default Halo;
