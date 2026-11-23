import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { advocate } from '../data/advocate.js'

const matterOptions = [
  'Divorce & judicial separation', 'Mutual consent divorce', 'Contested divorce', 'Child custody & visitation',
  'Maintenance & alimony', 'Domestic violence matter', 'Dowry harassment matter', 'NRI matrimonial matter',
  'Mediation & family settlement', 'Marriage registration or advice', 'Other family-law question',
  'Civil litigation and property disputes', 'Criminal litigation and legal defence', 'Debt and money recovery',
  'Commercial litigation and business disputes', 'Legal documentation and agreement vetting',
]

export default function ContactEnquiryForm({ defaultMatter = '', heading = 'Share a little context.' }) {
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('info')
  const selectedMatter = matterOptions.includes(defaultMatter) ? defaultMatter : ''

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('')
    if (!advocate.email) {
      setStatusType('error')
      setStatus('The office email address has not been configured. The enquiry has not been sent. Please contact the office after its details have been confirmed.')
      return
    }
    const form = new FormData(event.currentTarget)
    const fields = [
      `Name: ${form.get('fullName')}`,
      `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email')}`,
      `City / State: ${form.get('cityState')}`,
      `Matter type: ${form.get('matterType')}`,
      `Preferred contact: ${form.get('preferredContact')}`,
      '',
      `Brief description: ${form.get('description')}`,
    ]
    const subject = `Consultation enquiry — ${form.get('matterType')}`
    window.location.href = `mailto:${advocate.email.trim()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fields.join('\n'))}`
    setStatusType('info')
    setStatus('Your email application should open with a draft. Review it and press Send there; this website has not sent the enquiry.')
  }

  return (
    <div className="contact-form-panel" id="enquiry-form">
      <div className="form-heading">
        <p className="eyebrow">ENQUIRY FORM</p>
        <h2>{heading}</h2>
        <p>This form opens a draft email in your email application. It does not send or store your details on this website.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>Full name<input name="fullName" type="text" autoComplete="name" minLength="2" maxLength="90" required /></label>
          <label>Phone number<input name="phone" type="tel" inputMode="tel" autoComplete="tel" pattern="[+() 0-9.\-]{7,20}" title="Enter a phone number between 7 and 20 characters." required /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" maxLength="120" required /></label>
          <label>City / State<input name="cityState" type="text" autoComplete="address-level2" maxLength="100" required /></label>
          <label>Matter type<select name="matterType" defaultValue={selectedMatter} required><option value="" disabled>Select a topic</option>{matterOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label>Preferred contact method<select name="preferredContact" defaultValue="Email" required><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label>
        </div>
        <label>Brief description<textarea name="description" rows="5" maxLength="1000" placeholder="Share only a short, non-sensitive summary. Please do not include Aadhaar, PAN, bank details or intimate personal information." required /></label>
        <label className="checkbox-label"><input name="privacyConsent" type="checkbox" required /><span>I have read the <Link to="/privacy-policy/">Privacy Policy</Link> and understand this website will open a draft email that I must send myself.</span></label>
        <button className="button button--gold" type="submit">Prepare email enquiry <Icon name="arrow-up-right" size={16} /></button>
        {status && <p className={`form-status form-status--${statusType}`} role="status" aria-live="polite">{status}</p>}
        <p className="form-footnote">Submitting an enquiry does not create an advocate-client relationship. Please wait for the office to confirm availability and next steps.</p>
      </form>
    </div>
  )
}
