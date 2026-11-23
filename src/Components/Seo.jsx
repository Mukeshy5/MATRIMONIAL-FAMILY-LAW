import { Helmet } from 'react-helmet-async'
import { advocate, firmName } from '../data/advocate.js'

export default function Seo({ title, description, path = '/', type = 'website' }) {
  const siteName = firmName || advocate.name || 'Matrimonial & Family Law'
  const pageTitle = title ? `${title} | ${siteName}` : siteName
  const canonical = advocate.website ? new URL(path, advocate.website).toString() : ''
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
    </Helmet>
  )
}
