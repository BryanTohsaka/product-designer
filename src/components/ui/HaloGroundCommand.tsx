import { useTranslation } from 'react-i18next';
import StriveLarge from '../../assets/Halo-large-ticket.webp'
import StriveSmall from '../../assets/Halo-small-ticket.webp'
import { Link } from 'react-router'

const HaloCard = () => {
  const { t } = useTranslation('common');
  return (
    <div className='w-full md:w-2/3 border rounded-3xl border-neutral-700 overflow-hidden'>
      <img src={StriveSmall} className='lg:hidden w-full' alt="" />
      <img src={StriveLarge} className='hidden lg:inline w-full' alt="" />
      <h4 className='text-light font-anton px-2 mt-4 tracking-widest'>{t("work.case")}</h4>
        <section className='flex flex-col items-end p-4'>
          <p className='font-inter text-Grey text-justify text-sm leading-7 tracking-widest mb-8'>{t("work.halo")}</p>
          <Link to="/project/Halo-Ground-command" className='text-rose-300 text-[.8rem] border border-red rounded-full px-4 py-1 case-button'>{t("work.button")}</Link>
        </section>
    </div>
  )
}

export default HaloCard