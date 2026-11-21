import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness,
  CalendarDays, Check, ChevronDown, Clock3, FileCheck2, FileText, Globe2,
  Handshake, HeartHandshake, Landmark, Mail, MapPin, Menu, MessagesSquare,
  Phone, Scale, ShieldCheck, Sparkles, UsersRound, X,
} from 'lucide-react'

const icons = {
  'arrow-down': ArrowDown,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up-right': ArrowUpRight,
  'book-open': BookOpen,
  'briefcase': BriefcaseBusiness,
  'calendar': CalendarDays,
  check: Check,
  'chevron-down': ChevronDown,
  clock: Clock3,
  'file-check': FileCheck2,
  'file-text': FileText,
  globe: Globe2,
  handshake: Handshake,
  'heart-handshake': HeartHandshake,
  landmark: Landmark,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  messages: MessagesSquare,
  phone: Phone,
  scale: Scale,
  shield: ShieldCheck,
  sparkle: Sparkles,
  users: UsersRound,
  x: X,
}

export default function Icon({ name, size = 20, strokeWidth = 1.65, ...props }) {
  const Component = icons[name] || Scale
  return <Component aria-hidden="true" focusable="false" size={size} strokeWidth={strokeWidth} {...props} />
}
