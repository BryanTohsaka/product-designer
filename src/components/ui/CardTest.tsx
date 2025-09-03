import { useTranslation } from 'react-i18next';
import StriveSmall from '../../assets/Strive-small-ticket.webp'
import { Link } from 'react-router'

const CardTest = () => {
  const { t } = useTranslation('common');
  return (
    <div className='w-full md:w-2/3 lg:w-1/3 border rounded-3xl border-neutral-700 overflow-hidden'>
      <img src={StriveSmall} className='w-full' alt="" />
      <h4 className='text-light font-anton px-2 mt-4 tracking-widest'>{t("work.case")}</h4>
        <section className='flex flex-col items-end p-4'>
          <p className='font-inter text-Grey text-justify text-sm leading-7 tracking-widest mb-8'>{t("work.strive")}</p>
          <Link to="/project/strive" className='text-rose-300 text-[.8rem] border border-red rounded-full px-4 py-1 case-button'>{t("work.button")}</Link>
        </section>
    </div>
  )
}

export default CardTest