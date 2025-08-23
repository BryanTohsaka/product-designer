
import Hero from './components/Hero.tsx';
import Work from './components/Work.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';
import MenuBar from './components/ui/MenuBar.tsx';
import LanguageSwitcher from './components/LanguageSwitcher.tsx';

const App = () => {
  return (
    <div>
      <MenuBar  />
      <Hero />
      <Work />
      <About />
      <Footer />
      <LanguageSwitcher />
    </div>
  )
}

export default App