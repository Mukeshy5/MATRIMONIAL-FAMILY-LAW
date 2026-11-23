import { useSearchParams } from 'react-router-dom'
import Icon from '../Components/Icon.jsx'
import ContactEnquiryForm from '../Components/ContactEnquiryForm.jsx'
import ProfileContactDetails, { OfficeAddressList, ProfessionalContactLinks } from '../Components/ProfessionalContactDetails.jsx'
import Seo from '../Components/Seo.jsx'
import SectionHeading from '../Components/SectionHeading.jsx'
import ServiceCard from '../Components/ServiceCard.jsx'
import Reveal from '../Components/Reveal.jsx'
import { advocate, firmName, officeAddresses, officeLocation } from '../data/advocate.js'
import { practiceAreas } from '../data/practiceAreas.js'
import { getWhatsAppUrl } from '../utils/whatsapp.js'
import { CTASection, PageHero } from './Shared.jsx'

const values = [
  ['Clarity', 'Explain legal options and procedure in language that is straightforward and useful.'],
  ['Preparation', 'Review the relevant facts, documents and court directions with care.'],
  ['Respect', 'Treat each person and family circumstance with consideration.'],
  ['Confidentiality', 'Handle professional communications in keeping with applicable duties and agreed processes.'],
  ['Ethical representation', 'Provide legal assistance in accordance with applicable professional rules and duties.'],
]

export function AboutAdvocatePage() {
  return (
    <>
      <Seo title={`About ${advocate.name}`} description={`Profile and professional approach of ${advocate.name}, ${advocate.designation} in ${officeLocation}.`} path="/about-advocate/" />
      <PageHero eyebrow="ABOUT THE ADVOCATE" title="A considered approach to family-law questions." description={`Meet ${advocate.name}, ${advocate.designation}. Professional details on this page are configurable and must be verified before publication.`} breadcrumbs={[{ label: 'About advocate' }]} />
      <section className="content-section section-pad"><div className="container about-intro-grid">
        <div className="about-portrait">{advocate.portrait ? <img className="profile-photo" src={advocate.portrait} alt={`${advocate.name}, ${advocate.designation}`} loading="lazy" /> : <><div className="profile-image-arch"><Icon name="landmark" size={42} /></div><span>APPROVED PROFESSIONAL PHOTOGRAPH<br />TO BE ADDED</span></>}</div>
        <article className="longform-content about-bio"><p className="eyebrow">PROFESSIONAL INTRODUCTION</p><h2>{advocate.name}</h2><p className="profile-designation">{advocate.designation}</p><p>{advocate.name} works with people navigating matrimonial and family-law questions. The approach begins with listening to the circumstances, identifying the law that may apply and explaining possible next steps without promising a particular result.</p><p>Family disputes can bring legal, financial and personal concerns together. Careful preparation and a clear explanation of process can help a person make informed decisions about how to proceed.</p><p>Before this profile is published, the advocate should add a verified professional biography, enrolment information and academic qualifications, and confirm that each detail is accurate.</p>
          <div className="profile-facts profile-facts--about"><div><span>Professional designation</span><strong>{advocate.designation}</strong></div><div><span>Practice location</span><strong>{officeLocation}</strong></div><div><span>Languages</span><strong>{advocate.languages.length ? advocate.languages.join(', ') : 'To be verified'}</strong></div></div>
          <ProfileContactDetails />
        </article>
      </div></section>
      <section className="section-pad section-soft"><div className="container profile-detail-grid"><div><p className="eyebrow">PROFESSIONAL INFORMATION</p><h2>Verified details belong at the centre of a professional profile.</h2><p className="muted-copy">No credentials, enrolment details, courts or jurisdictions were supplied with this brief. The fields below are ready for verified information.</p></div><div className="verified-details">
        <div><span>Enrolment number</span><strong>{advocate.enrolmentNumber || 'Not yet supplied'}</strong></div>
        <div><span>Enrolment date</span><strong>{advocate.enrolmentDate || 'Not yet supplied'}</strong></div>
        <div><span>State Bar Council</span><strong>{advocate.stateBarCouncil || 'Not yet supplied'}</strong></div>
        <div><span>Bar Association</span><strong>{advocate.barAssociation || 'Not yet supplied'}</strong></div>
        <div><span>Academic and professional qualifications</span><strong>{advocate.qualifications.length ? advocate.qualifications.join(' · ') : 'Not yet supplied'}</strong></div>
        <div><span>Courts and jurisdictions</span><strong>{advocate.jurisdictions.length ? advocate.jurisdictions.join(' · ') : 'Not yet supplied'}</strong></div>
      </div></div></section>
      <section className="section-pad values-section"><div className="container"><Reveal><SectionHeading eyebrow="VALUES AND PRINCIPLES" title="Grounded in clarity, care and professional responsibility." description="A family-law practice should be shaped by the needs of each person and the duties of the profession." align="center" /></Reveal><div className="values-grid">{values.map(([title, description], index) => <Reveal key={title} delay={index * 0.05}><article><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div></section>
      <section className="section-pad section-soft"><div className="container"><SectionHeading eyebrow="PRACTICE FOCUS" title="Matrimonial and family-law matters." description="General information about topics the advocate may handle. Confirm current practice areas directly with the advocate." /><div className="service-grid service-grid--compact">{practiceAreas.slice(0, 6).map((area, index) => <ServiceCard key={area.slug} area={area} index={index} />)}</div></div></section>
      <CTASection title="Arrange a conversation with the office." />
    </>
  )
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const whatsappUrl = getWhatsAppUrl()
  const requestedMatter = searchParams.get('matter')

  return (
    <>
      <Seo title="Contact & Consultation" description={`Contact ${advocate.name} in ${officeLocation} to ask about a consultation on a matrimonial or family-law question.`} path="/contact/" />
      <PageHero eyebrow="CONTACT THE OFFICE" title="Start with a conversation." description="Use the contact details below or prepare an enquiry for your email application. Please do not send sensitive documents through an unverified channel." breadcrumbs={[{ label: 'Contact' }]} />
      <section className="content-section section-pad"><div className="container contact-grid">
        <aside className="contact-details">
          <p className="eyebrow">OFFICE DETAILS</p><h2>{firmName}</h2><p className="contact-tagline">{advocate.tagline}</p>
          <p className="contact-advocate-name">{advocate.name}, {advocate.designation}</p>
          <div className="contact-detail"><span className="contact-detail__icon"><Icon name="map-pin" size={19} /></span><div><span>Practice location</span><strong>{officeLocation}</strong></div></div>
          <OfficeAddressList className="office-address-list--contact" />
          <div className="contact-detail"><span className="contact-detail__icon"><Icon name="clock" size={19} /></span><div><span>Office hours</span><strong>{advocate.hours}</strong></div></div>
          <div className="contact-detail contact-detail--methods"><span className="contact-detail__icon"><Icon name="phone" size={19} /></span><div><span>Call or message the office</span><ProfessionalContactLinks className="professional-contact-links--contact" /></div></div>
          {whatsappUrl && <a className="button button--outline contact-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Message the office on WhatsApp <Icon name="arrow-up-right" size={16} /></a>}
          <div className="contact-safety"><Icon name="shield" size={19} /><p>For immediate danger or an urgent safety concern, contact local emergency services or police. This website is not an emergency service.</p></div>
          <div className="map-frame"><iframe title={`Map showing ${officeAddresses[0]}`} src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddresses[0])}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </aside>
        <ContactEnquiryForm defaultMatter={requestedMatter} />
      </div></section>
      <CTASection title="A careful first step can bring more clarity." description="Please allow the office to confirm receipt and availability through a configured contact channel." />
    </>
  )
}
