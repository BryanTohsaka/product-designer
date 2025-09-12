import LanguageSwitcher from "@/components/LanguageSwitcher"
import { useTranslation, Trans } from "react-i18next"
import historyImg from "../assets/work-hard.webp"
import researchImg from "../assets/research.webp"
import designImg from "../assets/design.webp"
import hashiriLogo from "../assets/hashiriLogo.webp"
import { Frown, Crosshair, ChartLine, Award, BookOpenCheck, Footprints } from 'lucide-react'
import Footer from "@/components/Footer"
import MenuBarBack from "@/components/ui/MenuBarBack"
import { motion } from "framer-motion"
import SliderHashiri from "@/components/ui/SliderHashiri"

const Strive = () => {
    const { t } = useTranslation('projects')
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
        >
            <div className="text-light">
                <section className="text-white uppercase  bg-[url(./assets/topography.webp)] bg-cover">
                    <div className="h-full flex flex-col items-center bg-gradient-to-t from-dark via-dark/98 to-dark/30 pb-56 pt-38">
                        <h2 className="font-anton text-7xl lg:text-9xl lg:tracking-[.1em]">Hashiri CO.</h2>
                        <h4 className="font-inter font-bold mt-4 tracking-widest">off the loop</h4>
                    </div>
                </section>
                <div className="px-5 lg:px-16 max-w-[1820px] mx-auto">
                    <section className="bg-dark flex flex-col lg:flex-row items-center ">
                        <div className="lg:pr-30 font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12">{t("strive.historiTitle")}</h2>
                            <p className="mb-20">{t("strive.histori1")}</p>
                            <p >{t("strive.histori2")}</p>
                        </div>
                        <img src={historyImg} alt="" className="mix-blend-plus-lighter w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                    </section>
                    <section className="flex flex-col lg:flex-row gap-12 my-30">
                        <div className="cardSC">
                            <span className="flex gap-4"><Frown className="Card-icon" /><h3>{t("strive.problemTitle")}</h3></span>
                            <ul className="pl-10 list-disc">
                                <li>{t("strive.problem1")}</li>
                                <li>{t("strive.problem2")}</li>
                                <li>{t("strive.problem3")}</li>
                            </ul>
                        </div>
                        <div className="cardSC">
                            <span className="flex gap-4"><Crosshair className="Card-icon" /><h3>{t("strive.objetiveTitle")}</h3></span>
                            <ul className="pl-10 list-disc">
                                <li>{t("strive.objetive1")}</li>
                                <li>{t("strive.objetive2")}</li>
                                <li>{t("strive.objetive3")}</li>
                                <li>{t("strive.objetive4")}</li>
                            </ul>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center ">
                        <img src={researchImg} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                        <div className="lg:pl-30 font-courier leading-[2.3rem] text-justify mt-24">
                            <h2 className="font-anton text-2xl mb-12 text-right">{t("strive.researchTitle")}</h2>
                            <p className="mb-20">{t("strive.research1")}</p>
                            <p>
                                <Trans i18nKey="strive.research2" ns="projects">
                                    Para complementar esta fase, realicé entrevistas informales con entusiastas del tuning y skaters, lo que me ayudó a comprender qué valores emocionales conectaban más con ellos:
                                    <span className="text-Greenlime"> autenticidad, rebeldía y pertenencia a una comunidad.</span>
                                </Trans>
                            </p>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center lg:items-start  mt-36">
                        <div className="lg:pr-30 font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12">{t("strive.definitionTitle")}</h2>
                            <p className="mb-20">{t("strive.definition1")}</p>
                            <p >{t("strive.definition2")}</p>
                        </div>
                        <img src={hashiriLogo} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0 lg:sticky lg:top-10" />
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center mt-48">
                        <img src={designImg} alt="" className=" w-2/3 lg:w-1/3 mt-15 lg:mt-0" />
                        <div className="lg:pl-30 font-courier leading-[2.3rem] text-justify mt-24">
                            <h2 className="font-anton text-2xl mb-12 text-right">{t("strive.designTitle")}</h2>
                            <p className="mb-20">{t("strive.design1")}</p>
                            <p className="mb-20">{t("strive.design2")}</p>
                        </div>
                    </section>
                    <section className=" flex flex-col lg:flex-row items-center mt-48">
                        <div className=" font-courier leading-[2.3rem] text-justify">
                            <h2 className="font-anton text-2xl mb-12 text-left">{t("strive.testingTitle")}</h2>
                            <p className="mb-5">{t("strive.testing1")}</p>
                            <p className="mb-20">{t("strive.testing2")}</p>
                        </div>
                    </section>
                    <SliderHashiri />
                    <section className="flex flex-col lg:flex-row gap-12 mt-30">
                        <div className="cardSC">
                            <span className="flex gap-4"><ChartLine className="Card-icon" /><h3>{t("strive.performanceTitle")}</h3></span>
                            <ul className="pl-10 list-disc">
                                <li>{t("strive.performance1")}</li>
                                <li>{t("strive.performance2")}</li>
                            </ul>
                        </div>
                        <div className="cardSC">
                            <span className="flex gap-4"><Award className="Card-icon" /><h3>{t("strive.resultsTitle")}</h3></span>
                            <ul className="pl-10 list-disc">
                                <li>{t("strive.results1")}</li>
                                <li>{t("strive.results2")}</li>
                                <li>{t("strive.results3")}</li>
                                <li>{t("strive.results4")}</li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex flex-col lg:flex-row gap-12 my-12">
                        <div className="cardSC">
                            <span className="flex gap-4"><BookOpenCheck className="Card-icon" /><h3>{t("strive.lessonTitle")}</h3></span>
                            <ul className="pl-10 list-disc">
                                <li>{t("strive.lesson1")}</li>
                                <li>{t("strive.lesson2")}</li>
                                <li>{t("strive.lesson3")}</li>
                            </ul>
                        </div>
                        <div className="cardSC">
                            <span className="flex gap-4"><Footprints className="Card-icon" /><h3>{t("strive.nextTitle")}</h3></span>
                            <ol className="pl-10 list-decimal">
                                <li>{t("strive.next1")}</li>
                                <li>{t("strive.next2")}</li>
                                <li>{t("strive.next3")}</li>
                                <li>{t("strive.next4")}</li>
                            </ol>
                        </div>
                    </section>
                    <section className="flex justify-center my-48">
                        <div className="p-4 md:p-10 lg:px-20 border-t-3 border-Greenlime lg:w-3/4">
                            <p className="font-courier text-center">
                            <Trans i18nKey="strive.footerText" ns="projects">
                                    <span className="text-Greenlime">HASHIRI CO.</span> nació de una historia personal y se consolidó como un manifiesto visual de autenticidad y rebeldía. Este caso de estudio demuestra mi capacidad de convertir experiencias vitales en un proyecto de diseño tangible, alineado con la metodología de Product Design."
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
export default Strive;
