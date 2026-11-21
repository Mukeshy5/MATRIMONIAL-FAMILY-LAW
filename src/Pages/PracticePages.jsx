import { Link, useParams } from 'react-router-dom'
import Icon from '../Components/Icon.jsx'
import Seo from '../Components/Seo.jsx'
import ServiceCard from '../Components/ServiceCard.jsx'
import { legalReferences, practiceAreas, practiceBySlug } from '../data/practiceAreas.js'
import { officeLocation } from '../data/advocate.js'
import { CTASection, LegalInfoNote, PageHero, RelatedAreas } from './Shared.jsx'
import FAQAccordion from '../Components/FAQAccordion.jsx'

export function PracticeAreasPage() {
  return (
    <>
      <Seo title="Practice Areas" description={`Overview of matrimonial and family-law topics in ${officeLocation}, including divorce, custody, maintenance and mediation.`} path="/practice-areas/" />
      <PageHero eyebrow="AREAS OF PRACTICE" title="Family-law matters, thoughtfully considered." description="Explore the legal questions commonly raised in matrimonial and family matters. The applicable statute and process depend on the individual circumstances." breadcrumbs={[{ label: 'Practice areas' }]} />
      <section className="content-section section-pad"><div className="container">
        <div className="content-intro narrow"><p>Family-law questions can overlap. A divorce matter may involve support, parenting arrangements, residence or a related court proceeding. These pages offer general information and are designed to help you prepare questions for an advocate.</p><p>The information is not a substitute for advice on the law that applies to your marriage, location and facts. Please have each page reviewed by the advocate before publication.</p></div>
        <div className="service-grid service-grid--page">{practiceAreas.map((area, index) => <ServiceCard area={area} key={area.slug} index={index} />)}</div>
      </div></section>
      <CTASection />
    </>
  )
}

export function PracticeAreaPage() {
  const { slug } = useParams()
  const area = practiceBySlug[slug]
  if (!area) return <PracticeNotFound />
  const title = `${area.title} in ${officeLocation}`
  return (
    <>
      <Seo title={title} description={`${area.summary} General information on process, preparation and related questions in ${officeLocation}.`} path={`/${area.slug}/`} />
      <PageHero eyebrow="MATRIMONIAL & FAMILY LAW" title={area.title} description={area.summary} breadcrumbs={[{ label: 'Practice areas', to: '/practice-areas/' }, { label: area.title }]} />
      <section className="content-section section-pad"><div className="container article-layout">
        <article className="longform-content">
          <div className="article-lead"><p>{area.intro}</p></div>
          <section><p className="eyebrow">UNDERSTANDING THE ISSUE</p><h2>What to know about {area.title.toLowerCase()}</h2><p>{area.issue}</p></section>
          <section><p className="eyebrow">LEGAL ASSISTANCE</p><h2>How an advocate may assist</h2><p>{area.assistance}</p></section>
          <section><p className="eyebrow">PROCEDURE</p><h2>Possible procedural steps</h2><p>{area.procedure}</p><p>Procedure can vary by court, statute, state rules and judicial directions. Dates and requirements should be confirmed from the relevant court papers and current rules.</p></section>
          {legalReferences[area.slug] && <section className="primary-references"><p className="eyebrow">PRIMARY SOURCES</p><h2>Legislation to check</h2><p>These official sources provide a starting point. Confirm current amendments, the applicable personal law and local procedure before relying on them.</p><ul>{legalReferences[area.slug].map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer">{reference.label}<Icon name="arrow-up-right" size={15} /></a></li>)}</ul></section>}
          <section><p className="eyebrow">PREPARATION</p><h2>Important considerations</h2><ul className="check-list">{area.considerations.map((item) => <li key={item}><Icon name="check" size={17} />{item}</li>)}</ul></section>
          <section><p className="eyebrow">BEFORE A CONSULTATION</p><h2>Documents to consider gathering</h2><ul className="check-list">{area.documents.map((item) => <li key={item}><Icon name="file-check" size={17} />{item}</li>)}</ul><p>Do not send identity or financial documents through an unverified channel. Ask the office how to share records securely.</p></section>
          <section className="practice-faq"><p className="eyebrow">COMMON QUESTIONS</p><h2>Frequently asked questions</h2><FAQAccordion items={area.questions} /></section>
          <RelatedAreas slugs={area.related} />
          <LegalInfoNote />
        </article>
        <aside className="article-sidebar">
          <div className="sidebar-card sidebar-card--accent"><Icon name={area.icon} size={26} /><p className="eyebrow">ON THIS PAGE</p><h2>{area.title}</h2><p>{area.summary}</p><Link to="/contact/" className="button button--gold button--full">Contact the office <Icon name="arrow-up-right" size={16} /></Link></div>
          <div className="sidebar-card"><p className="eyebrow">RELATED READING</p>{area.related.map((slug) => { const related = practiceBySlug[slug]; return related && <Link className="sidebar-link" key={slug} to={`/${slug}/`}>{related.title}<Icon name="arrow-up-right" size={14} /></Link> })}<Link className="sidebar-link" to="/legal-resources/">Legal resources <Icon name="arrow-up-right" size={14} /></Link></div>
        </aside>
      </div></section>
      <CTASection title={`Discuss a question about ${area.title.toLowerCase()}.`} />
    </>
  )
}

function PracticeNotFound() {
  return <section className="content-section section-pad"><div className="container narrow"><h1>Practice area not found</h1><p>This practice area may have moved. Explore the current list of topics.</p><Link className="button button--gold" to="/practice-areas/">View practice areas</Link></div></section>
}
