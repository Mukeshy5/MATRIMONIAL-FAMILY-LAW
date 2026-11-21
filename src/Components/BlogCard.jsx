import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function BlogCard({ post, index = 0 }) {
  return (
    <article className="article-card" style={{ '--card-order': index }}>
      <div className="article-card__meta"><span>{post.category}</span><span>{post.readTime}</span></div>
      <h3><Link to={`/legal-resources/${post.slug}/`}>{post.title}</Link></h3>
      <p>{post.excerpt}</p>
      <Link className="text-link" to={`/legal-resources/${post.slug}/`}>
        Read article <Icon name="arrow-up-right" size={16} />
      </Link>
    </article>
  )
}
