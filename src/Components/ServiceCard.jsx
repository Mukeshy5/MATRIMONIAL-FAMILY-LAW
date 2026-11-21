import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ area, index = 0 }) {
  return (
    <article className="service-card" style={{ '--card-order': index }}>
      <div className="service-card__icon"><Icon name={area.icon} size={23} /></div>
      <h3><Link to={`/${area.slug}/`}>{area.title}</Link></h3>
      <p>{area.summary}</p>
      <Link className="text-link" to={`/${area.slug}/`} aria-label={`Read about ${area.title}`}>
        Explore this area <Icon name="arrow-up-right" size={16} />
      </Link>
    </article>
  )
}
