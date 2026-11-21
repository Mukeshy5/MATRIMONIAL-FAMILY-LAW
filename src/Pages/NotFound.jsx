import { Link } from 'react-router-dom'
import Seo from '../Components/Seo.jsx'
import Icon from '../Components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="not-found section-pad"><Seo title="Page Not Found" description="The page could not be found. Return to the matrimonial and family-law information homepage." path="/404/" /><div className="container"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>This page could not be found.</h1><p>The address may have changed. You can return to the homepage or browse the current practice areas.</p><div><Link className="button button--gold" to="/">Go to homepage <Icon name="arrow-right" size={16} /></Link><Link className="button button--outline" to="/practice-areas/">Browse practice areas</Link></div></div></section>
  )
}
