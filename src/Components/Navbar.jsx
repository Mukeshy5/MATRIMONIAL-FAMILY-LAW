import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { advocate, officeLocation } from '../data/advocate.js'
import { practiceAreas } from '../data/practiceAreas.js'
import Icon from './Icon.jsx'

const linkClass = ({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [practiceOpen, setPracticeOpen] = useState(false)
  const practiceRef = useRef(null)
  const location = useLocation()
  const practiceActive = location.pathname === '/practice-areas/' || practiceAreas.some((area) => location.pathname === `/${area.slug}/`)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setPracticeOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenus = () => {
    setMenuOpen(false)
    setPracticeOpen(false)
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__identity">
            <span><Icon name="map-pin" size={14} /> {officeLocation}</span>
            <span><Icon name="clock" size={14} /> {advocate.hours}</span>
          </div>
          <div className="topbar__contact">
            {advocate.phone && <a href={`tel:${advocate.phone}`}><Icon name="phone" size={14} /> {advocate.phone}</a>}
            {advocate.email && <a href={`mailto:${advocate.email}`}><Icon name="mail" size={14} /> {advocate.email}</a>}
            {!advocate.phone && !advocate.email && <span>Contact details to be configured</span>}
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label={`${advocate.name}, home`} onClick={closeMenus}>
            <span className="brand-mark"><Icon name="landmark" size={23} /></span>
            <span className="brand-copy">
              <strong>{advocate.name}</strong>
              <small>MATRIMONIAL & FAMILY LAW</small>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <NavLink to="/" end className={linkClass} onClick={closeMenus}>Home</NavLink>
            <NavLink to="/about-advocate/" className={linkClass} onClick={closeMenus}>About</NavLink>
            <div className="nav-dropdown" ref={practiceRef}>
              <button
                className={`nav-link nav-dropdown__trigger${practiceOpen || practiceActive ? ' is-active' : ''}`}
                type="button"
                aria-expanded={practiceOpen}
                aria-controls="practice-menu"
                onClick={() => setPracticeOpen((open) => !open)}
              >
                Practice areas <Icon name="chevron-down" size={15} className={practiceOpen ? 'rotated' : ''} />
              </button>
              {practiceOpen && (
                <div className="mega-menu" id="practice-menu">
                  <div className="mega-menu__intro">
                    <p className="eyebrow">PRACTICE AREAS</p>
                    <h2>Family law, explained with care.</h2>
                    <Link to="/practice-areas/" className="text-link" onClick={closeMenus}>View all areas <Icon name="arrow-right" size={16} /></Link>
                  </div>
                  <div className="mega-menu__links">
                    {practiceAreas.map((area) => <Link key={area.slug} to={`/${area.slug}/`} onClick={closeMenus}>{area.title}<Icon name="arrow-up-right" size={14} /></Link>)}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/legal-resources/" className={linkClass} onClick={closeMenus}>Resources</NavLink>
            <NavLink to="/faqs/" className={linkClass} onClick={closeMenus}>FAQs</NavLink>
            <NavLink to="/contact/" className={linkClass} onClick={closeMenus}>Contact</NavLink>
            <Link to="/contact/" className="button button--small button--nav" onClick={closeMenus}>Request a consultation <Icon name="arrow-up-right" size={16} /></Link>
          </nav>
        </div>
      </header>
    </>
  )
}
