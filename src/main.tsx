import { createRoot } from 'react-dom/client'
import '@/index.css'
import Home from '@/Home.tsx'
import { HashRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')!).render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </HashRouter>,
)
