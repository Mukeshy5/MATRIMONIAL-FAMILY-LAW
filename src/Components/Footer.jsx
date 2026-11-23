import { Link } from 'react-router-dom'
import { advocate, contactNumbers, firmName, getGoogleMapsUrl, officeAddresses } from '../data/advocate.js'
import { practiceAreas } from '../data/practiceAreas.js'
import { getWhatsAppUrl } from '../utils/whatsapp.js'
import Icon from './Icon.jsx'

const copyrightYear = new Date().getFullYear()

export default function Footer() {
  const featuredPractice = ['divorce-lawyer', 'mutual-consent-divorce', 'child-custody-lawyer', 'maintenance-alimony-lawyer', 'domestic-violence-lawyer', 'nri-divorce-lawyer']
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand brand--footer">
            <span className="brand-mark"><Icon name="landmark" size={23} /></span>
            <span className="brand-copy"><strong>{firmName}</strong><small>{advocate.name.toUpperCase()} · {advocate.designation.toUpperCase()}</small></span>
          </Link>
          <p>{advocate.tagline}</p>
          <p className="footer-small">General information on matrimonial and family-law matters in India.</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/">Home</Link><Link to="/about-advocate/">About</Link><Link to="/practice-areas/">Practice areas</Link><Link to="/legal-resources/">Legal resources</Link><Link to="/faqs/">FAQs</Link><Link to="/contact/">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Practice areas</h2>
          {featuredPractice.map((slug) => {
            const area = practiceAreas.find((item) => item.slug === slug)
            return <Link key={slug} to={`/${slug}/`}>{area.title}</Link>
          })}
        </div>
        <div className="footer-column footer-contact">
          <h2>Office</h2>
          {officeAddresses.map((address) => <a className="footer-office-link" key={address} href={getGoogleMapsUrl(address)} target="_blank" rel="noreferrer"><Icon name="map-pin" size={16} /><span>{address}<small>View on Google Maps</small></span></a>)}
          <p><Icon name="clock" size={16} /> {advocate.hours}</p>
          {contactNumbers.map((contact) => <a key={contact.tel} href={`tel:${contact.tel}`}><Icon name="phone" size={16} /> Call {contact.display}</a>)}
          <a href={`mailto:${advocate.email}`}><Icon name="mail" size={16} /> Email {advocate.email}</a>
          {contactNumbers.map((contact) => <a key={contact.whatsapp} className="footer-whatsapp" href={getWhatsAppUrl(contact.whatsapp)} target="_blank" rel="noreferrer">WhatsApp {contact.display} <Icon name="arrow-up-right" size={14} /></a>)}
        </div>
      </div>
      <div className="container footer-notice">
        <p>Professional information notice: Before publication, the advocate should verify every profile and legal statement and confirm compliance with applicable Bar Council of India requirements, including Rule 36 website particulars and any required intimation or approval.</p>
      </div>
      <div className="container footer-bottom">
        <span>© {copyrightYear} {firmName}. All rights reserved.</span>
        <div><Link to="/privacy-policy/">Privacy policy</Link><Link to="/disclaimer/">Disclaimer</Link></div>
        <span className="footer-bottom__note">General information only · No result or timeline is guaranteed</span>
      </div>
    </footer>
  )
}
