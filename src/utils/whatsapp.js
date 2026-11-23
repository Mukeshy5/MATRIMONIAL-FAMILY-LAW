import { advocate } from '../data/advocate.js'

export function getWhatsAppUrl(number = advocate.whatsapp || advocate.phone, message = `Namaste ${advocate.name}, I would like to discuss a matrimonial or family-law matter.`) {
  const cleanNumber = (number || '').replace(/\D/g, '')
  return cleanNumber ? `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}` : ''
}
