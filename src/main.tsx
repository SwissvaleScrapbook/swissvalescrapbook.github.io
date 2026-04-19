import { createRoot } from 'react-dom/client'
import '@/index.css'
import Home from '@/pages/Home.tsx'
import FAQ from '@/pages/FAQ.tsx'
import { HashRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    </HashRouter>,
)
