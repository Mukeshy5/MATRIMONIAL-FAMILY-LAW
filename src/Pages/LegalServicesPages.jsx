import { Link, useParams } from 'react-router-dom'
import Icon from '../Components/Icon.jsx'
import Seo from '../Components/Seo.jsx'
import ContactEnquiryForm from '../Components/ContactEnquiryForm.jsx'
import { legalServiceBySlug } from '../data/legalServices.js'
import { officeLocation } from '../data/advocate.js'
import { CTASection, LegalInfoNote, PageHero } from './Shared.jsx'

export function LegalServicePage() {
  const { slug } = useParams()
  const service = legalServiceBySlug[slug]

  if (!service) {
    return (
      <>
        <Seo title="Legal service not found" description="The requested legal service page could not be found." path={`/services/${slug}/`} />
        <PageHero eyebrow="LEGAL SERVICES" title="Service not found" description="This page may have moved. Return to the home page to explore the available legal services." breadcrumbs={[{ label: 'Legal service not found' }]} />
        <section className="content-section section-pad"><div className="container narrow"><Link className="button button--gold" to="/">Return to home <Icon name="arrow-right" size={16} /></Link></div></section>
      </>
    )
  }

  const contactUrl = `/contact/?matter=${encodeURIComponent(service.enquiryMatter)}`
  const description = `${service.summary} General information about legal assistance in ${officeLocation}.`

  return (
    <>
      <Seo title={service.title} description={description} path={`/services/${service.slug}/`} />
      <PageHero
        eyebrow="LEGAL SERVICES"
        title={service.title}
        description={service.summary}
        breadcrumbs={[{ label: service.title }]}
      />
      <section className="content-section section-pad">
        <div className="container article-layout">
          <article className="longform-content">
            <div className="article-lead"><p>{service.introduction}</p></div>
            <section>
              <p className="eyebrow">ABOUT THIS SERVICE</p>
              <h2>Legal support shaped around the matter</h2>
              <p>{service.description}</p>
            </section>
            <section>
              <p className="eyebrow">KEY SERVICES</p>
              <h2>How we may assist</h2>
              <ul className="check-list">{service.keyServices.map((item) => <li key={item}><Icon name="check" size={17} />{item}</li>)}</ul>
            </section>
            <section>
              <p className="eyebrow">OUR APPROACH</p>
              <h2>How we assist clients</h2>
              <p>{service.assistance}</p>
              <p>The appropriate advice and process depend on the facts, documents, applicable law and forum. A consultation can help identify the questions that need to be considered.</p>
            </section>
            <section className="service-enquiry" aria-labelledby="service-enquiry-heading">
              <p className="eyebrow">CONSULTATION & ENQUIRY</p>
              <h2 id="service-enquiry-heading">Discuss your legal requirements</h2>
              <p>Use the contact page enquiry form to share a brief, non-sensitive summary. The relevant service will be selected for you. Please do not send confidential documents through an unverified channel.</p>
              <div className="service-enquiry__actions">
                <Link to={contactUrl} className="button button--gold">Request a Consultation <Icon name="arrow-up-right" size={16} /></Link>
                <Link to={contactUrl} className="button button--outline">Contact Us <Icon name="arrow-right" size={16} /></Link>
              </div>
            </section>
            <ContactEnquiryForm defaultMatter={service.enquiryMatter} heading={`Enquire about ${service.title}`} />
            <LegalInfoNote />
          </article>
          <aside className="article-sidebar">
            <div className="sidebar-card sidebar-card--accent">
              <Icon name={service.icon} size={26} />
              <p className="eyebrow">LEGAL SERVICES</p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <Link to={contactUrl} className="button button--gold button--full">Enquire about this service <Icon name="arrow-up-right" size={16} /></Link>
            </div>
            <div className="sidebar-card">
              <p className="eyebrow">OTHER SERVICES</p>
              {Object.values(legalServiceBySlug).filter((item) => item.slug !== service.slug).map((item) => (
                <Link className="sidebar-link" key={item.slug} to={`/services/${item.slug}/`}>{item.title}<Icon name="arrow-up-right" size={14} /></Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <CTASection
        title="Need Professional Legal Assistance?"
        description="Get in touch to discuss your legal requirements and explore the legal options available for your matter."
        primaryLabel="Contact Us"
        secondaryLabel="Request a Consultation"
        secondaryTo={contactUrl}
      />
    </>
  )
}
