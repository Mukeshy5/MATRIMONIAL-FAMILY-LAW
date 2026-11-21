import { useId, useState } from 'react'
import Icon from './Icon.jsx'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const idPrefix = useId().replaceAll(':', '')
  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const open = openIndex === index
        return (
          <section className={`faq-item${open ? ' is-open' : ''}`} key={question}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={`${idPrefix}-answer-${index}`} onClick={() => setOpenIndex(open ? null : index)}>
                <span>{question}</span>
                <span className="faq-toggle"><Icon name={open ? 'x' : 'arrow-down'} size={17} /></span>
              </button>
            </h3>
            {open && <div className="faq-answer" id={`${idPrefix}-answer-${index}`}><p>{answer}</p></div>}
          </section>
        )
      })}
    </div>
  )
}
