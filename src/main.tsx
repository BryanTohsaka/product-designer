
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import './i18n';
import App from './App.tsx'
import NotFound from './pages/404.tsx';



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
)
