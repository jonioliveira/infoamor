'use client'

import { siteContent, type Alert, type AlertLevel, type ServiceStatus, type ServiceStatusLevel } from '@/data/content'
import {
  Activity,
  AlertTriangle,
  Building2,
  CalendarDays,
  Car,
  Clock,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  CreditCard,
  Droplets,
  ExternalLink,
  Facebook,
  FileText,
  Globe,
  GraduationCap,
  Hammer,
  HandHelping,
  Handshake,
  HeartPlus,
  HelpCircle,
  Info,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Radio,
  Sun,
  Thermometer,
  Trash2,
  Users,
  Utensils,
  Wifi,
  Wind,
  X,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'

// =============================================================================
// Style maps
// =============================================================================

const alertConfig: Record<AlertLevel, { bg: string; border: string; text: string; icon: string; iconBg: string }> = {
  danger: {
    bg: 'bg-red-50',
    border: 'border-red-500',
    text: 'text-red-900',
    icon: 'text-white',
    iconBg: 'bg-red-500',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    text: 'text-amber-900',
    icon: 'text-white',
    iconBg: 'bg-amber-500',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    text: 'text-blue-900',
    icon: 'text-white',
    iconBg: 'bg-blue-500',
  },
}

const statusConfig: Record<ServiceStatusLevel, { bg: string; text: string; dot: string }> = {
  operational: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    dot: 'bg-emerald-500',
  },
  partial: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-500',
  },
  outage: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500' },
  unknown: {
    bg: 'bg-slate-100',
    text: 'text-slate-600',
    dot: 'bg-slate-400',
  },
  in_progress: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    dot: 'bg-sky-500',
  },
}

const serviceIcons: Record<string, React.ReactNode> = {
  'service-water': <Droplets className="h-6 w-6 text-blue-500" />,
  'service-electricity': <Zap className="h-6 w-6 text-amber-500" />,
  'service-telecom': <Radio className="h-6 w-6 text-violet-500" />,
  'service-atm': <CreditCard className="h-6 w-6 text-slate-500" />,
  'service-schools': <GraduationCap className="h-6 w-6 text-emerald-600" />,
  'service-waste': <Trash2 className="h-6 w-6 text-green-600" />,
  'service-mail': <Mail className="h-6 w-6 text-green-600" />,
  'service-pharmacy': <HeartPlus className="h-6 w-6 text-green-600" />,
}

const resourceIcons: Record<string, React.ReactNode> = {
  'resource-food': <Utensils className="h-6 w-6 text-orange-500" />,
  'resource-debris': <Hammer className="h-6 w-6 text-stone-500" />,
  'resource-internet': <Wifi className="h-6 w-6 text-blue-500" />,
  'resource-whatsapp': <MessageCircle className="h-6 w-6 text-green-500" />,
  'resource-door-to-door': <Users className="h-6 w-6 text-purple-500" />,
  'resource-sos-leiria': <HandHelping className="h-6 w-6 text-green-500" />,
  'resource-tempestades-sos': <Handshake className="h-6 w-6 text-green-500" />,
}

// =============================================================================
// Sub-components
// =============================================================================

function AlertBanner({ alert }: { alert: Alert }) {
  const s = alertConfig[alert.level]
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} ${s.text} rounded-r-xl px-5 py-4 shadow-sm`} role="alert">
      <div className="flex items-start gap-4">
        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${s.iconBg} ${s.icon}`}>
          {alert.level === 'info' ? <Info className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
        </span>
        <div className="min-w-0">
          <p className="font-bold text-[0.9rem] leading-snug">{alert.title}</p>
          <p className="text-sm mt-1 opacity-75 leading-relaxed">{alert.description}</p>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status, label }: { status: ServiceStatusLevel; label: string }) {
  const s = statusConfig[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${s.bg} ${s.text}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot} animate-pulse`} />
      {label}
    </span>
  )
}

function ServiceCard({ service }: { service: ServiceStatus }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-100">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50">
            {serviceIcons[service.id]}
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-[family-name:var(--font-space-grotesk)]">
            {service.name}
          </h3>
        </div>
        <StatusBadge status={service.status} label={service.statusLabel} />
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
      {service.link && (
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
        >
          {service.linkLabel}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  )
}

function SectionHeader({ icon, title, id }: { icon: React.ReactNode; title: string; id?: string }) {
  return (
    <div className="flex items-center gap-3 mb-8" id={id}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-white">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h2>
    </div>
  )
}

// =============================================================================
// Weather
// =============================================================================

interface DailyWeather {
  time: string[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  precipitation_sum: number[]
  weathercode: number[]
  wind_speed_10m_max: number[]
}

function weatherIcon(code: number) {
  if (code === 0) return <Sun className="h-8 w-8 text-amber-400" />
  if (code <= 3) return <CloudSun className="h-8 w-8 text-amber-300" />
  if (code <= 48) return <CloudFog className="h-8 w-8 text-slate-400" />
  if (code <= 57) return <CloudDrizzle className="h-8 w-8 text-blue-400" />
  if (code <= 67) return <CloudRain className="h-8 w-8 text-blue-500" />
  if (code <= 77) return <CloudSnow className="h-8 w-8 text-sky-300" />
  if (code <= 82) return <CloudRain className="h-8 w-8 text-blue-600" />
  if (code <= 99) return <CloudLightning className="h-8 w-8 text-amber-500" />
  return <Cloud className="h-8 w-8 text-slate-400" />
}

function weatherLabel(code: number): string {
  if (code === 0) return 'Céu limpo'
  if (code <= 3) return 'Parcialmente nublado'
  if (code <= 48) return 'Nevoeiro'
  if (code <= 57) return 'Chuviscos'
  if (code <= 67) return 'Chuva'
  if (code <= 77) return 'Neve'
  if (code <= 82) return 'Aguaceiros'
  if (code <= 99) return 'Trovoada'
  return '—'
}

function formatWeekday(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  const today = new Date()
  today.setHours(12, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  if (date.toDateString() === today.toDateString()) return 'Hoje'
  if (date.toDateString() === tomorrow.toDateString()) return 'Amanhã'

  return date.toLocaleDateString('pt-PT', { weekday: 'short', day: 'numeric' })
}

function WeatherForecast() {
  const [weather, setWeather] = useState<DailyWeather | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=39.75&longitude=-8.82&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,wind_speed_10m_max&timezone=Europe/Lisbon&forecast_days=5'
    )
      .then(r => r.json())
      .then(data => setWeather(data.daily))
      .catch(() => setError(true))
  }, [])

  if (error) {
    return (
      <p className="text-sm text-slate-400 text-center py-8">Não foi possível carregar a previsão meteorológica.</p>
    )
  }

  if (!weather) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 border-4 border-slate-200 border-t-green-600 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {weather.time.map((day, i) => (
        <div
          key={day}
          className={`rounded-2xl p-5 text-center border transition-shadow hover:shadow-md ${
            i === 0
              ? 'bg-gradient-to-b from-blue-50 to-sky-50 border-blue-200 shadow-md md:col-span-1 col-span-2'
              : 'bg-white border-slate-100 shadow-sm'
          }`}
        >
          <p
            className={`text-sm font-bold uppercase tracking-wider mb-3 ${
              i === 0 ? 'text-blue-700' : 'text-slate-400'
            }`}
          >
            {formatWeekday(day)}
          </p>
          <div className="flex justify-center mb-3">{weatherIcon(weather.weathercode[i])}</div>
          <p className={`text-xs font-medium mb-3 ${i === 0 ? 'text-blue-600' : 'text-slate-400'}`}>
            {weatherLabel(weather.weathercode[i])}
          </p>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Thermometer className="h-4 w-4 text-slate-300" />
            <span className="text-lg font-bold text-slate-900">{Math.round(weather.temperature_2m_max[i])}°</span>
            <span className="text-sm text-slate-400">{Math.round(weather.temperature_2m_min[i])}°</span>
          </div>
          <div className="space-y-1 text-xs text-slate-400">
            <div className="flex items-center justify-center gap-1">
              <CloudRain className="h-3 w-3" />
              <span>{weather.precipitation_sum[i]} mm</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Wind className="h-3 w-3" />
              <span>{Math.round(weather.wind_speed_10m_max[i])} km/h</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// Page
// =============================================================================

export default function Home() {
  const c = siteContent
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140
      let current = ''
      for (const section of c.navSections) {
        const el = document.getElementById(section.id)
        if (el && el.offsetTop <= scrollY) {
          current = section.id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [c.navSections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ================================================================== */}
      {/* NAVIGATION                                                         */}
      {/* ================================================================== */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)] tracking-tight">
              {c.meta.title}
            </span>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {c.navSections.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === s.id
                      ? 'text-green-700 bg-green-50 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            {/* Mobile menu */}
            <button
              className="md:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-5 py-3 space-y-1">
            {c.navSections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === s.id ? 'text-green-700 bg-green-50' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ================================================================== */}
      {/* HERO HEADER                                                        */}
      {/* ================================================================== */}
      <header className="pt-16 bg-gradient-to-br from-green-800 via-green-900 to-emerald-950 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/30 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">
            {c.meta.title}
          </h1>
          <p className="text-green-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto">{c.meta.subtitle}</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 text-green-100 text-sm">
            <Clock className="h-4 w-4" />
            Última atualização: {c.meta.lastUpdated}
          </div>
        </div>
      </header>

      {/* ================================================================== */}
      {/* ALERT BANNERS                                                      */}
      {/* ================================================================== */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 -mt-6 relative z-10">
        <div className="space-y-3">
          {c.alerts.map(alert => (
            <AlertBanner key={alert.id} alert={alert} />
          ))}
        </div>
      </div>

      {/* ================================================================== */}
      {/* MAIN CONTENT                                                       */}
      {/* ================================================================== */}
      <main>
        {/* -------------------------------------------------------------- */}
        {/* SERVICE STATUS                                                   */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="servicos" icon={<Activity className="h-5 w-5" />} title="Estado dos Serviços" />
            <div className="grid gap-5 md:grid-cols-2">
              {c.serviceStatus.map(svc => (
                <ServiceCard key={svc.id} service={svc} />
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* RESOURCES                                                        */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="recursos" icon={<Package className="h-5 w-5" />} title="Recursos Disponíveis" />
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {c.resources.map(r => (
                <div
                  key={r.id}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm mb-4">
                    {resourceIcons[r.id]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 font-[family-name:var(--font-space-grotesk)]">
                    {r.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.description}</p>
                  {r.warning && (
                    <div className="mt-4 flex items-start gap-2 text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{r.warning}</span>
                    </div>
                  )}
                  {r.link && (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors shadow-sm"
                    >
                      {r.linkLabel}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* COMMUNITY CLEANUP EVENT                                          */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader
              id="limpeza"
              icon={<CalendarDays className="h-5 w-5" />}
              title="Ações de Limpeza e Reparação"
            />
            <div className="space-y-5">
              {c.communityEvents.map(item => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-8 md:p-10 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 shadow-sm">
                      <Clock className="h-7 w-7 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-amber-900 font-[family-name:var(--font-space-grotesk)]">
                        {item.date}
                      </p>
                      <p className="text-amber-700 font-medium">{item.time}</p>
                    </div>
                  </div>
                  <p className="text-amber-800 mb-8 text-base">{item.description}</p>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-white/60 rounded-xl p-5 backdrop-blur-sm">
                      <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)]">
                        <MapPin className="h-5 w-5" /> Pontos de concentração
                      </h3>
                      <ul className="space-y-3">
                        {item.meetingPoints.map(mp => (
                          <li key={mp.locality} className="text-sm text-amber-800 flex items-start gap-3">
                            <span className="h-2 w-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>
                              <span className="font-semibold">{mp.locality}</span> — {mp.location}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.materials && (
                      <div className="bg-white/60 rounded-xl p-5 backdrop-blur-sm">
                        <h3 className="font-bold text-amber-900 mb-4 font-[family-name:var(--font-space-grotesk)]">
                          Se tiver, traga
                        </h3>
                        <ul className="space-y-3">
                          {item.materials.map(m => (
                            <li key={m} className="text-sm text-amber-800 flex items-start gap-3">
                              <span className="h-2 w-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <p className="mt-8 text-sm text-amber-600 border-t border-amber-200/60 pt-5 italic">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* TRANSPORT                                                        */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="transporte" icon={<Car className="h-5 w-5" />} title="Transporte" />
            {c.transport.map(t => (
              <div
                key={t.id}
                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/60 p-8 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 shadow-sm shrink-0">
                    <Car className="h-7 w-7 text-emerald-700" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-slate-900 text-xl font-[family-name:var(--font-space-grotesk)]">
                        {t.provider} — {t.title}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {t.period}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-3">{t.description}</p>
                    <ul className="space-y-1.5">
                      {t.details.map((d, i) => (
                        <li key={i} className="text-sm text-slate-500 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* DECLARATIONS                                                     */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="declaracoes" icon={<FileText className="h-5 w-5" />} title="Apoios e Declarações" />
            <div className="space-y-5">
              {c.administrative.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 shrink-0">
                      <FileText className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900 text-lg mb-1 font-[family-name:var(--font-space-grotesk)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors shadow-sm"
                        >
                          {item.linkLabel}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}

                      {item.contacts && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          {item.contacts.map(ct =>
                            ct.type === 'email' ? (
                              <a
                                key={ct.value}
                                href={`mailto:${ct.value}`}
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-5 py-2.5 transition-colors border border-slate-200"
                              >
                                <Mail className="h-4 w-4" />
                                {ct.display}
                              </a>
                            ) : (
                              <a
                                key={ct.value}
                                href={`https://wa.me/${ct.value}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 text-sm font-semibold px-5 py-2.5 transition-colors border border-green-200"
                              >
                                <MessageCircle className="h-4 w-4" />
                                WhatsApp: {ct.display}
                              </a>
                            )
                          )}
                        </div>
                      )}

                      {item.note && <p className="mt-3 text-xs text-slate-400 font-medium">{item.note}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* WEATHER                                                          */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="meteo" icon={<CloudSun className="h-5 w-5" />} title="Meteorologia" />
            <WeatherForecast />
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* CONTACT                                                          */}
        {/* -------------------------------------------------------------- */}
        <section className="py-14 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5 md:px-10">
            <SectionHeader id="contactos" icon={<Building2 className="h-5 w-5" />} title="Contactos" />
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left: address and info */}
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-1 font-[family-name:var(--font-space-grotesk)]">
                    {c.contact.entity}
                  </h3>
                  <p className="text-slate-400 font-medium mb-5">{c.contact.municipality}</p>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed">{c.contact.address}</p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.contact.message}</p>
                </div>

                {/* Right: contact methods */}
                <div className="space-y-3">
                  <a
                    href={`tel:${c.contact.phone}`}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors px-5 py-3 border border-slate-200"
                  >
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Telefone fixo</p>
                      <p className="text-sm text-slate-700 font-semibold">244 861 144</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${c.contact.mobile}`}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors px-5 py-3 border border-slate-200"
                  >
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Telemóvel</p>
                      <p className="text-sm text-slate-700 font-semibold">927 589 981</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${c.contact.email}`}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors px-5 py-3 border border-slate-200"
                  >
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Email</p>
                      <p className="text-sm text-slate-700 font-semibold">{c.contact.email}</p>
                    </div>
                  </a>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={c.contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors px-5 py-3 border border-blue-200 flex-1"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-700 font-semibold">Facebook</span>
                    </a>
                    <a
                      href={c.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors px-5 py-3 border border-slate-200 flex-1"
                    >
                      <Globe className="h-5 w-5 text-slate-500" />
                      <span className="text-sm text-slate-700 font-semibold">jf-amor.pt</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================== */}
      {/* FOOTER                                                              */}
      {/* ================================================================== */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-10">
          <div className="text-center space-y-3">
            <p className="text-sm text-slate-300 font-medium">
              Developed by{' '}
              <a href="https://jonioliveira.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors underline underline-offset-2">
                Joni Oliveira
              </a>
            </p>
            <p className="text-xs">Made with ❤️ from Amor, Leiria</p>
            <p className="text-xs mt-1">Última atualização: {c.meta.lastUpdated}</p>
            <div className="pt-4 border-t border-slate-800 mt-4">
              <p className="text-xs text-slate-500">Página não oficial. Informação sujeita a alterações.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
