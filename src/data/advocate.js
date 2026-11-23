export const firmName = 'LEGAL AFFAIR'

export const officeAddresses = [
  '239, Raja Garden, New Delhi – 110015',
  '133, Patiala House Court, New Delhi – 110001',
  '771, Saket District Court, Saket, New Delhi – 110017',
]

export const contactNumbers = [
  { display: '+91 9811479499', tel: '+919811479499', whatsapp: '919811479499' },
  { display: '+91 8178504508', tel: '+918178504508', whatsapp: '918178504508' },
]

export const advocate = {
  name: 'Manoj Tewari',
  designation: 'Advocate',
  city: 'New Delhi',
  state: 'Delhi',
  country: 'India',
  phone: contactNumbers[0].display,
  whatsapp: contactNumbers[0].whatsapp,
  email: 'legalaffair.manoj@gmail.com',
  address: officeAddresses[0],
  addresses: officeAddresses,
  hours: 'By appointment',
  enrolmentNumber: '',
  enrolmentDate: '',
  stateBarCouncil: '',
  barAssociation: '',
  qualifications: [],
  languages: [],
  jurisdictions: [],
  portrait: '',
  website: '',
  tagline: 'Your Trusted Legal Partner Since 1994',
  intro: 'A considered, confidential and fact-specific approach to matrimonial and family-law questions.',
}

export const officeLocation = `${advocate.city}, ${advocate.state}, ${advocate.country}`

export function getGoogleMapsUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}
