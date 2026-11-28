import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { FloatingWhatsAppButton } from './WhatsAppButton.jsx'
import { ScrollProgress } from './Reveal.jsx'

export default function MainLayout() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <FloatingWhatsAppButton />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  )
}
