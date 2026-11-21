import { advocate } from '../data/advocate.js'

export function getWhatsAppUrl(message = `Namaste ${advocate.name}, I would like to discuss a matrimonial or family-law matter.`) {
  const number = (advocate.whatsapp || advocate.phone).replace(/\D/g, '')
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : ''
}
