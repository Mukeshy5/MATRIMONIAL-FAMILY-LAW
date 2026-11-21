import { Link, useParams } from 'react-router-dom'
import BlogCard from '../Components/BlogCard.jsx'
import Icon from '../Components/Icon.jsx'
import Seo from '../Components/Seo.jsx'
import FAQAccordion from '../Components/FAQAccordion.jsx'
import { blogPosts, blogBySlug } from '../data/blogPosts.js'
import { faqGroups } from '../data/faqs.js'
import { officeLocation } from '../data/advocate.js'
import { CTASection, LegalInfoNote, PageHero } from './Shared.jsx'

export function LegalResourcesPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))]
  return (
    <>
      <Seo title="Legal Resources" description="Educational articles about divorce, child custody, maintenance, domestic violence, NRI matrimonial matters and family settlement in India." path="/legal-resources/" />
      <PageHero eyebrow="LEGAL RESOURCES" title="Useful context for important questions." description="General educational articles about matrimonial and family-law topics. Legal information can change and should be reviewed for the applicable law and facts." breadcrumbs={[{ label: 'Legal resources' }]} />
      <section className="content-section section-pad"><div className="container">
        <div className="resource-categories"><span>Browse by topic</span>{categories.map((category) => <span key={category}>{category}</span>)}</div>
        <div className="article-grid article-grid--all">{blogPosts.map((post, index) => <BlogCard key={post.slug} post={post} index={index} />)}</div>
        <p className="review-pending">Author and publication details require verification. Every article needs advocate review before publication.</p>
      </div></section>
      <CTASection title="Have a question about the information here?" description="Contact the office to ask about discussing your specific circumstances." />
    </>
  )
}

export function BlogDetailsPage() {
  const { slug } = useParams()
  const post = blogBySlug[slug]
  if (!post) return <ResourceNotFound />
  const description = `${post.excerpt} General educational information for family-law questions in ${officeLocation}.`
  return (
    <>
      <Seo title={post.title} description={description} path={`/legal-resources/${post.slug}/`} type="article" />
      <PageHero eyebrow={post.category.toUpperCase()} title={post.title} description={post.excerpt} breadcrumbs={[{ label: 'Legal resources', to: '/legal-resources/' }, { label: post.title }]} />
      <section className="content-section section-pad"><div className="container article-layout article-layout--resource">
        <article className="longform-content resource-article">
          <div className="article-byline"><span><Icon name="clock" size={15} /> {post.readTime}</span><span>Publication date: To be confirmed</span><span>Advocate review: Pending</span></div>
          <nav className="table-of-contents" aria-label="Table of contents"><h2>In this article</h2><ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol></nav>
          {post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <div className="article-internal-links"><h2>Explore related information</h2><p><Link to="/practice-areas/">Browse practice areas</Link> · <Link to="/faqs/">Read frequently asked questions</Link> · <Link to="/contact/">Contact the office</Link></p></div>
          <LegalInfoNote />
        </article>
        <aside className="article-sidebar"><div className="sidebar-card"><p className="eyebrow">MORE ARTICLES</p>{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 5).map((item) => <Link key={item.slug} className="sidebar-link" to={`/legal-resources/${item.slug}/`}>{item.title}<Icon name="arrow-up-right" size={14} /></Link>)}</div></aside>
      </div></section>
      <CTASection title="Would it help to discuss your situation?" />
    </>
  )
}

function ResourceNotFound() {
  return <section className="content-section section-pad"><div className="container narrow"><h1>Article not found</h1><p>This article may have moved. Visit the resource centre to browse available topics.</p><Link className="button button--gold" to="/legal-resources/">Browse legal resources</Link></div></section>
}

export function FAQsPage() {
  return (
    <>
      <Seo title="Frequently Asked Questions" description="General answers about family-law consultations, divorce, custody, maintenance, domestic violence and court procedure." path="/faqs/" />
      <PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title="A few common questions, answered carefully." description="These general answers can help you prepare. Individual legal questions should be reviewed under the law and procedure that apply to your circumstances." breadcrumbs={[{ label: 'FAQs' }]} />
      <section className="content-section section-pad"><div className="container faq-page-layout">
        <aside className="faq-index"><p className="eyebrow">CATEGORIES</p>{faqGroups.map((group, index) => <a href={`#faq-category-${index + 1}`} key={group.category}>{group.category}<Icon name="arrow-down" size={14} /></a>)}</aside>
        <div className="faq-categories">{faqGroups.map((group, index) => <section id={`faq-category-${index + 1}`} className="faq-category" key={group.category}><p className="eyebrow">0{index + 1} / GUIDANCE</p><h2>{group.category}</h2><FAQAccordion items={group.questions} /></section>)}<div className="faq-page-note"><LegalInfoNote /></div></div>
      </div></section>
      <CTASection title="Still unsure what applies to you?" description="A consultation can help clarify which legal questions need attention first." />
    </>
  )
}
