import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import AboutUs from './pages/AboutUs'
import Citizenship from './pages/Citizenship'
import Egov from './pages/Egov'
import Events from './pages/Events'
import Government from './pages/Government'
import Join from './pages/Join'
import Investors from './pages/Investors'
import MediaNews from './pages/MediaNews'

export default function App(){
  const { i18n } = useTranslation()
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = i18n.language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    setLang(i18n.language)
  }, [i18n.language])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<AboutUs lang={lang} />} />
          <Route path="/government" element={<Government />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/join" element={<Join />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/media" element={<MediaNews />} />
          <Route path="/egov" element={<Egov />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
