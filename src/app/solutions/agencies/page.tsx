import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Verabix for Ad Agencies — Manage every client account without the chaos',
  description: 'One workspace per client. Unified cross-channel reporting across Meta Ads and Google Ads. Vera AI answers client performance questions on demand.',
}

const PURPLE  = '#534AB7'
const PURPLE_BG = '#EEEDFE'
const TEXT    = '#1A1F36'
const MUTED   = '#697386'
const BORDER  = '#E3E8EF'
const SURF    = '#F0F2F7'
const TINT    = '#F6F9FC'
const FONT    = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'
const GREEN   = '#0A8550'

const BULLETS = [
  'One isolated workspace per client — data never mixes across accounts',
  'Unified Meta + Google Ads table with the same metrics for every client',
  '@Vera in Slack gives your team instant per-client performance answers',
  'Campaign name filters auto-detect your naming conventions — no manual tagging',
  'Multi-account Meta and Google Ads from a single login',
  'Save hours each week on reporting — Vera writes the brief, not you',
]

const STATS = [
  { v: '6+', l: 'hours saved per client per month on reporting' },
  { v: '1', l: 'dashboard for all your Meta + Google campaigns' },
  { v: '∞', l: 'client workspaces, all isolated' },
]

function MockupCard() {
  const clients = [
    { name: 'Nordic Sport', spend: '€12.4k', roas: '3.8×', delta: '+14%', up: true },
    { name: 'Bloom Beauty', spend: '€8.1k',  roas: '4.2×', delta: '+22%', up: true },
    { name: 'TechFlow B2B', spend: '€5.9k',  roas: '2.1×', delta: '-8%',  up: false },
    { name: 'Urban Eats',   spend: '€3.6k',  roas: '5.1×', delta: '+31%', up: true },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)', fontFamily: FONT }}>
      <div style={{ padding: '14px 18px', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>All clients</div>
        <div style={{ fontSize: 11, color: MUTED }}>4 workspaces · last 30d</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 50px 60px', padding: '8px 18px', background: TINT, fontSize: 10, color: MUTED, textTransform: 'uppercase', letterSpacing: '.4px', fontWeight: 600 }}>
        <div>Client</div><div>Spend</div><div>ROAS</div><div style={{ textAlign: 'right' }}>Change</div>
      </div>
      {clients.map((c, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 60px 50px 60px', padding: '10px 18px', alignItems: 'center', borderTop: i > 0 ? `1px solid ${SURF}` : 'none' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{c.name}</div>
          <div style={{ fontSize: 11, color: TEXT }}>{c.spend}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: TEXT }}>{c.roas}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: c.up ? GREEN : '#C0123C', textAlign: 'right' }}>{c.delta}</div>
        </div>
      ))}
    </div>
  )
}

export default function AgenciesPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero */}
      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Solutions · Ad Agencies
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              Manage every client account without the context-switching.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Agencies lose hours each week bouncing between Meta Business Manager, Google Ads, and spreadsheets — once per client. Verabix gives each client their own workspace and Vera ready to pull the numbers on demand.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Start free
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request+from+agency" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                Book a demo →
              </a>
            </div>
          </div>
          <MockupCard />
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '48px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, textAlign: 'center' }}>
          {STATS.map(s => (
            <div key={s.v}>
              <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-1px', color: PURPLE, marginBottom: 6 }}>{s.v}</div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bullets */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '64px 40px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
          Built for the way agencies actually work.
        </h2>
        <div className="vbx-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {BULLETS.map(b => (
            <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 18px', background: TINT, borderRadius: 10, border: `0.5px solid ${BORDER}` }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="8" fill={PURPLE_BG}/><path d="M4.5 8L7 10.5L11.5 5.5" stroke={PURPLE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.55 }}>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Ready to consolidate your client reporting?</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Get started for free. No credit card required.</p>
          <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 15, fontWeight: 600, padding: '13px 32px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
            Start with Verabix →
          </a>
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  )
}
