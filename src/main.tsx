
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import './i18n';
import App from './App.tsx'
import NotFound from './pages/404.tsx';
import Strive from './pages/Strive.tsx';
import ScrollToTop from './components/ui/ScrollToTop.tsx';
import ScrollToHashElement from './components/ui/ScrollToHashElement.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ScrollToTop />
  <ScrollToHashElement />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/project/hashiriSC" element={<Strive />} />
    </Routes>
  </BrowserRouter>,
)
