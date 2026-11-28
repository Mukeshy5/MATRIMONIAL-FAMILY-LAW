import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '../Components/Icon.jsx'
import Reveal from '../Components/Reveal.jsx'
import SectionHeading from '../Components/SectionHeading.jsx'
import ServiceCard from '../Components/ServiceCard.jsx'
import LegalServiceCard from '../Components/LegalServiceCard.jsx'
import BlogCard from '../Components/BlogCard.jsx'
import FAQAccordion from '../Components/FAQAccordion.jsx'
import ProfileContactDetails from '../Components/ProfessionalContactDetails.jsx'
import Seo from '../Components/Seo.jsx'
import { advocate, officeLocation } from '../data/advocate.js'
import { practiceAreas } from '../data/practiceAreas.js'
import { legalServices } from '../data/legalServices.js'
import { featuredResources } from '../data/resourcePreviews.js'
import { faqGroups } from '../data/faqs.js'
import { CTASection } from './Shared.jsx'

const principles = [
  ['Clear legal communication', 'Understand the question, the applicable process and the possible next steps in plain language.'],
  ['Respectful consultation', 'A personal matter deserves careful listening and a measured, non-judgmental conversation.'],
  ['Preparation', 'Relevant facts, documents and deadlines are organised before advice is given.'],
  ['Fact-specific guidance', 'Legal options depend on the applicable law and the circumstances of each matter.'],
]

const consultationSteps = [
  ['01', 'Initial enquiry', 'Share the broad nature of your question and any immediate deadline. Avoid sending sensitive records until a secure channel is confirmed.'],
  ['02', 'Consultation scheduling', 'The office confirms whether a consultation is available, its format and the information to prepare.'],
  ['03', 'Document review', 'Relevant notices, orders and records are reviewed in context where appropriate.'],
  ['04', 'Guidance and next steps', 'Discuss the legal questions, possible routes and practical next steps based on the information available.'],
]

const quickFaqs = faqGroups.flatMap((group) => group.questions).slice(0, 4)

function TypingWord({ word }) {
  const [displayedWord, setDisplayedWord] = useState(word)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    let index = word.length
    let deleting = true
    let timeoutId

    const tick = () => {
      index += deleting ? -1 : 1
      setDisplayedWord(word.slice(0, index))

      if (deleting && index === 0) {
        deleting = false
        timeoutId = window.setTimeout(tick, 450)
        return
      }

      if (!deleting && index === word.length) {
        deleting = true
        timeoutId = window.setTimeout(tick, 1500)
        return
      }

      timeoutId = window.setTimeout(tick, deleting ? 65 : 105)
    }

    timeoutId = window.setTimeout(tick, 1500)
    return () => window.clearTimeout(timeoutId)
  }, [reduceMotion, word])

  return (
    <em className="hero-typed-word" aria-hidden="true">
      {reduceMotion ? word : displayedWord}
      <span className="hero-typed-cursor" />
    </em>
  )
}

export default function Home() {
  return (
    <>
      <Seo title="Matrimonial Advocate & Family Lawyer" description={`General legal information and consultation details for matrimonial and family-law matters in ${officeLocation}.`} path="/" />
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> MATRIMONIAL & FAMILY LAW</p>
            <h1 aria-label="Legal guidance for sensitive family matters.">Legal guidance for <TypingWord word="sensitive" /> family matters.</h1>
            <p className="hero-lede">When family relationships face difficult legal questions, understanding your rights and available options can make the next step clearer. {advocate.name} approaches matrimonial and family-law matters with care, discretion and attention to the facts.</p>
            <div className="hero-actions">
              <Link to="/contact/" className="button button--gold">Request a consultation <Icon name="arrow-up-right" size={17} /></Link>
              <Link to="/practice-areas/" className="button button--text">Explore practice areas <Icon name="arrow-right" size={17} /></Link>
            </div>
            <div className="hero-reassurance"><span><Icon name="shield" size={17} /> Respectful conversations</span><span><Icon name="sparkle" size={17} /> Fact-specific guidance</span></div>
          </div>
          <Reveal className="hero-art-wrap">
            <div className="hero-art" role="img" aria-label="Illustrative architecture with a balanced scale, representing thoughtful legal guidance">
              <div className="hero-art__arc" />
              <svg className="hero-art__building" viewBox="0 0 510 620" fill="none" aria-hidden="true">
                <path d="M53 566h404M86 534h338M111 534V258h49v276m47 0V258h49v276m48 0V258h49v276m47 0V258h49v276M86 257 255 133l169 124H86Z" stroke="currentColor" strokeWidth="2" />
                <path d="M117 243h276M145 215h220M184 187h142M210 162h91" stroke="currentColor" strokeWidth="1.5" />
                <path d="M110 566v23m292-23v23M73 589h364" stroke="currentColor" strokeWidth="2" />
                <circle cx="255" cy="316" r="49" stroke="currentColor" strokeWidth="1.5" />
                <path d="M255 281v70m-47-46h94m-82 1-17 40h34l-17-40Zm65 0-17 40h34l-17-40Zm-27-8-20-11m20 11 20-11m-20 76h-30m30 0h30" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="hero-art__caption"><span className="caption-line" /><span>THOUGHTFUL COUNSEL<br /><strong>FOR FAMILY MATTERS</strong></span></div>
              <div className="hero-art__seal"><Icon name="landmark" size={22} /></div>
            </div>
            <p className="hero-art-note">Illustrative artwork · Add an approved advocate portrait after verification</p>
          </Reveal>
        </div>
        <div className="hero-bottom-rule"><span /></div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <Reveal direction="right"><p className="eyebrow">A CLEARER WAY FORWARD</p><h2>Legal support with clarity and discretion.</h2></Reveal>
          <Reveal direction="left" delay={0.1}><p className="intro-copy">Family disputes can involve personal, financial and emotional concerns. A legal consultation can help you understand your circumstances, the relevant legal options and the procedure that may apply. The aim is to make the next step more informed, one question at a time.</p><Link to="/about-advocate/" className="text-link">Meet {advocate.name} <Icon name="arrow-right" size={16} /></Link></Reveal>
        </div>
      </section>

      <section className="practice-section section-pad section-soft">
        <div className="container">
          <Reveal><SectionHeading eyebrow="AREAS OF PRACTICE" title="Support for the questions families face." description="Explore general information on matrimonial and family-law topics. The applicable law and available remedies depend on the facts of each matter." /></Reveal>
          <div className="service-grid">{practiceAreas.map((area, index) => <Reveal key={area.slug} delay={(index % 3) * 0.04}><ServiceCard area={area} index={index} /></Reveal>)}</div>
          <div className="section-end-link"><Link to="/practice-areas/" className="button button--outline">View all practice areas <Icon name="arrow-right" size={17} /></Link></div>
        </div>
      </section>

      <section className="legal-services-section section-pad">
        <div className="container">
          <Reveal><SectionHeading eyebrow="LEGAL SERVICES" title="Our Legal Services" description="Comprehensive Legal Solutions Tailored to Your Needs" /></Reveal>
          <Reveal className="legal-services-intro"><p>We provide professional legal assistance and representation across a wide range of legal matters. Our approach focuses on understanding each client’s requirements, protecting their legal interests, and delivering practical, transparent and effective legal solutions.</p></Reveal>
          <div className="service-grid legal-service-grid">{legalServices.map((service, index) => <Reveal key={service.slug} delay={(index % 3) * 0.04}><LegalServiceCard service={service} /></Reveal>)}</div>
          <div className="section-end-link"><Link to="/contact/" className="button button--outline">Request a consultation <Icon name="arrow-up-right" size={17} /></Link></div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-grid">
          <Reveal className="approach-heading" direction="right"><p className="eyebrow">HOW WE WORK</p><h2>A considered approach to every family matter.</h2><p>Every family and every case has its own context. These principles shape how legal questions are discussed and prepared.</p><Link to="/about-advocate/" className="text-link">More about the approach <Icon name="arrow-right" size={16} /></Link></Reveal>
          <div className="principles-grid">{principles.map(([title, text], index) => <Reveal key={title} delay={index * 0.07}><article className="principle-card"><span className="principle-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="consultation-section section-pad section-navy">
        <div className="container">
          <Reveal><SectionHeading eyebrow="A SIMPLE PROCESS" title="How a consultation can work." description="A calm, structured first conversation helps identify the relevant questions and information." align="center" /></Reveal>
          <div className="steps-grid">{consultationSteps.map(([number, title, text], index) => <Reveal key={number} delay={index * 0.06}><article className="step-card"><div className="step-number">{number}</div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="profile-section section-pad">
        <div className="container profile-grid">
          <Reveal className="profile-image-panel" direction="right" aria-label="Profile image area">{advocate.portrait ? <img className="profile-photo" src={advocate.portrait} alt={`${advocate.name}, ${advocate.designation}`} loading="lazy" /> : <><div className="profile-image-arch"><Icon name="landmark" size={44} /></div><span className="profile-image-label">APPROVED PROFESSIONAL PORTRAIT<br />TO BE ADDED</span></>}</Reveal>
          <Reveal className="profile-copy" direction="left" delay={0.1}><p className="eyebrow">THE ADVOCATE</p><h2>{advocate.name}</h2><p className="profile-designation">{advocate.designation}</p><p className="profile-bio">{advocate.intro}</p>
            <div className="profile-facts">
              <div><span>Practice location</span><strong>{officeLocation}</strong></div>
              <div><span>Qualifications</span><strong>{advocate.qualifications.length ? advocate.qualifications.join(', ') : 'To be verified and added'}</strong></div>
              <div><span>Enrolment information</span><strong>{advocate.enrolmentNumber || 'To be verified and added'}</strong></div>
            </div>
            <ProfileContactDetails />
            <Link to="/about-advocate/" className="button button--outline">View advocate profile <Icon name="arrow-right" size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="resources-section section-pad section-soft">
        <div className="container">
          <Reveal><div className="section-heading-row"><SectionHeading eyebrow="LEGAL RESOURCES" title="A little more clarity, before you decide." description="General educational articles to help you prepare informed questions." /><Link to="/legal-resources/" className="text-link">Visit the resource centre <Icon name="arrow-right" size={16} /></Link></div></Reveal>
          <div className="article-grid">{featuredResources.map((post, index) => <Reveal key={post.slug} delay={index * 0.07}><BlogCard post={post} index={index} /></Reveal>)}</div>
          <p className="review-pending">All legal resource content requires review by the advocate before publication.</p>
        </div>
      </section>

      <section className="faq-preview-section section-pad">
        <div className="container faq-preview-grid">
          <Reveal><p className="eyebrow">COMMON QUESTIONS</p><h2>Good information can make the first conversation easier.</h2><p>Here are a few general answers. Every situation should be assessed under the law that applies to it.</p><Link to="/faqs/" className="text-link">Browse all FAQs <Icon name="arrow-right" size={16} /></Link></Reveal>
          <Reveal delay={0.1}><FAQAccordion items={quickFaqs} /></Reveal>
        </div>
      </section>

      <CTASection title="Need guidance on a matrimonial or family-law matter?" description="Contact the office to ask about a consultation and discuss your circumstances." />
    </>
  )
}
