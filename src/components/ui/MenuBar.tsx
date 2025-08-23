import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness, User, Send } from 'lucide-react'
import { useState, useEffect } from 'react';

const MenuBar = () => {
  const { t } = useTranslation('common');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const heroHeight = hero ? hero.offsetHeight : 0;

    const handleScroll = () => {
      setVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-Grey fixed bottom-7 lg:top-7 lg:bottom-auto z-50 capitalize w-full flex justify-center transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex justify-around w-7/8 border border-light/30 rounded-full py-3 bg-dark/70 backdrop-blur-sm text-[.7rem] font-bold font-inter tracking-widest md:w-90" >
        <a href='#work' className='flex items-center gap-2 group'>
          <BriefcaseBusiness className="transition-colors duration-300 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]" />
          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]">{t("menu.2")}</span>
        </a>
        <a href='#about' className='flex items-center group'>
          <User className="transition-colors duration-300 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]" />
          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]">{t("menu.3")}</span>
        </a>
        <a href='#contact' className='flex items-center group '>
          <Send className="transition-colors duration-300 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]" />
          <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_6px_#14b8a6]">{t("menu.4")}</span>
        </a>
      </div >
    </div >
  )
}

export default MenuBar