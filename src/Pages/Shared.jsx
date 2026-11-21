import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb.jsx'
import Icon from '../Components/Icon.jsx'
import { practiceBySlug } from '../data/practiceAreas.js'

export function PageHero({ eyebrow, title, description, breadcrumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
        <div className="page-hero__copy">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
    </section>
  )
}

export function CTASection({ title = 'Questions about a family-law matter?', description = 'Contact the office to discuss whether a consultation may be appropriate for your circumstances.' }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div><p className="eyebrow eyebrow--light">A NEXT STEP, WHEN YOU ARE READY</p><h2>{title}</h2><p>{description}</p></div>
        <div className="cta-band__actions">
          <Link to="/contact/" className="button button--gold">Contact the office <Icon name="arrow-up-right" size={17} /></Link>
          <Link to="/practice-areas/" className="button button--outline-light">Explore practice areas <Icon name="arrow-right" size={17} /></Link>
        </div>
      </div>
    </section>
  )
}

export function RelatedAreas({ slugs = [] }) {
  return (
    <section className="related-section">
      <h2>Related practice areas</h2>
      <div className="related-links">{slugs.map((slug) => {
        const area = practiceBySlug[slug]
        return area ? <Link key={slug} to={`/${slug}/`}>{area.title}<Icon name="arrow-up-right" size={15} /></Link> : null
      })}</div>
    </section>
  )
}

export function LegalInfoNote() {
  return <aside className="legal-note"><Icon name="scale" size={19} /><p>General educational information only. It is not legal advice and does not create an advocate-client relationship. The law and procedure depend on the applicable statute, court and facts. Please have an advocate review any issue specific to your circumstances.</p></aside>
}
