import { advocate } from '../data/advocate.js'
import { getWhatsAppUrl } from '../utils/whatsapp.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export function FloatingWhatsAppButton() {
  const href = getWhatsAppUrl()
  if (!href) return null
  return (
    <a className="whatsapp-float" href={href} target="_blank" rel="noreferrer" aria-label={`Open a WhatsApp chat with ${advocate.name}`}>
      <WhatsAppIcon size={25} />
    </a>
  )
}
