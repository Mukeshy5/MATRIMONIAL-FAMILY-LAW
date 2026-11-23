import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function LegalServiceCard({ service }) {
  const to = `/services/${service.slug}/`
  const title = service.cardTitle || service.title
  const summary = service.cardSummary || service.summary

  return (
    <article className="service-card legal-service-card">
      <div className="service-card__icon"><Icon name={service.icon} size={23} /></div>
      <h3><Link to={to}>{title}</Link></h3>
      <p>{summary}</p>
      <Link className="text-link" to={to} aria-label={`Learn more about ${title}`}>
        Learn More <Icon name="arrow-up-right" size={16} />
      </Link>
    </article>
  )
}
