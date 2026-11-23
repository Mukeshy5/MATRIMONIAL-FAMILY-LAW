import Icon from './Icon.jsx'
import { advocate, contactNumbers, firmName, getGoogleMapsUrl, officeAddresses } from '../data/advocate.js'
import { getWhatsAppUrl } from '../utils/whatsapp.js'

export function OfficeAddressList({ className = '' }) {
  return (
    <div className={`office-address-list ${className}`.trim()}>
      {officeAddresses.map((address, index) => (
        <div className="office-address-card" key={address}>
          <span>Office 0{index + 1}</span>
          <a href={getGoogleMapsUrl(address)} target="_blank" rel="noreferrer">
            <span>{address}</span><small>View on Google Maps</small><Icon name="arrow-up-right" size={15} />
          </a>
        </div>
      ))}
    </div>
  )
}

export function ProfessionalContactLinks({ className = '' }) {
  return (
    <div className={`professional-contact-links ${className}`.trim()}>
      {contactNumbers.map((contact) => (
        <div className="professional-contact-links__number" key={contact.tel}>
          <a className="professional-contact-links__call" href={`tel:${contact.tel}`} aria-label={`Call ${contact.display}`}><Icon name="phone" size={16} />Call {contact.display}</a>
          <a className="professional-contact-links__whatsapp" href={getWhatsAppUrl(contact.whatsapp)} target="_blank" rel="noreferrer">WhatsApp<Icon name="arrow-up-right" size={14} /></a>
        </div>
      ))}
      <a className="professional-contact-links__email" href={`mailto:${advocate.email}`}><Icon name="mail" size={16} />Email {advocate.email}</a>
    </div>
  )
}

export default function ProfileContactDetails() {
  return (
    <section className="profile-contact-card" aria-label={`${firmName} contact details`}>
      <div className="profile-contact-card__intro">
        <p className="eyebrow">{firmName}</p>
        <p>{advocate.tagline}</p>
      </div>
      <OfficeAddressList />
      <ProfessionalContactLinks />
    </section>
  )
}
