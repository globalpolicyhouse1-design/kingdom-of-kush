import React, { useEffect, useState, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import HomeFooter from './components/HomeFooter'
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

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
)

export default function App(){
  const { i18n, ready } = useTranslation()
  const [lang, setLang] = useState('en')

  useEffect(() => {
    if (ready) {
      document.documentElement.lang = i18n.language
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
      setLang(i18n.language)
    }
  }, [i18n.language, ready])

  if (!ready) {
    return <LoadingFallback />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<><About lang={lang} /><HomeFooter /></>} />
            <Route path="/government" element={<><Government /><HomeFooter /></>} />
            <Route path="/citizenship" element={<><Citizenship /><HomeFooter /></>} />
            <Route path="/join" element={<><Join /><HomeFooter /></>} />
            <Route path="/investors" element={<><Investors /><HomeFooter /></>} />
            <Route path="/media" element={<><MediaNews /><HomeFooter /></>} />
            <Route path="/egov" element={<><Egov /><HomeFooter /></>} />
            <Route path="/events" element={<><Events /><HomeFooter /></>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
