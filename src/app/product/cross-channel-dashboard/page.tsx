import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cross-channel Dashboard — Meta Ads, Google Ads, Google Analytics in one view',
  description: 'Stop toggling between Ads Manager, Google Ads, and GA4. Verabix pulls all three into a single unified dashboard with shared date ranges and consistent metrics.',
}

const PURPLE    = '#534AB7'
const PURPLE_BG = '#EEEDFE'
const TEXT      = '#1A1F36'
const MUTED     = '#697386'
const BORDER    = '#E3E8EF'
const SURF      = '#F0F2F7'
const TINT      = '#F6F9FC'
const FONT      = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

const BULLETS = [
  'KPI chips: spend, ROAS, CPA, conversions — across Meta and Google Ads simultaneously',
  'Top campaigns by spend, ranked across every connected channel',
  'Source breakdown: which channel drives traffic, conversions and revenue',
  'Custom date ranges and period-over-period comparison in one click',
  'GA4 sessions and conversion data alongside paid campaign metrics',
  'Build any custom view in 90 seconds with Vera — no drag-and-drop required',
]

function DashPreview() {
  const kpis = [
    { l: 'Total spend', v: '€48.2k', d: '+12%', up: true },
    { l: 'Blended ROAS', v: '4.1×',  d: '+0.3', up: true },
    { l: 'Conversions',  v: '2,084',  d: '+18%', up: true },
    { l: 'CPA',          v: '€23.10', d: '-6%', up: false },
  ]
  const sources = [
    { l: 'Meta · paid',       pct: 100 },
    { l: 'Google · cpc',      pct: 78 },
    { l: 'Google · pmax',     pct: 55 },
    { l: 'organic / direct',  pct: 32 },
  ]
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 18, boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)', fontFamily: FONT }}>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>
        Performance · all channels · last 30d
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 14 }}>
        {kpis.map(k => (
          <div key={k.l} style={{ background: SURF, borderRadius: 8, padding: '8px 10px' }}>
            <div style={{ fontSize: 9, color: MUTED }}>{k.l}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, letterSpacing: '-0.4px', marginTop: 2 }}>{k.v}</div>
            <div style={{ fontSize: 9, color: k.up ? '#0E7C54' : '#C0123C', marginTop: 1 }}>{k.d}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 8 }}>Source breakdown</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {sources.map(s => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 10, color: TEXT, width: 100, flexShrink: 0 }}>{s.l}</div>
            <div style={{ flex: 1, height: 4, background: SURF, borderRadius: 2 }}>
              <div style={{ width: `${s.pct}%`, height: '100%', background: PURPLE, borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 10, color: MUTED, width: 30, textAlign: 'right' }}>{s.pct}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CrossChannelDashboardPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Cross-channel Dashboard
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              One view for spend, ROAS, and what matters across every channel.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Stop toggling between Ads Manager, Google Ads, and GA4. Verabix pulls all three into a single unified dashboard — same date ranges, same metrics, same source of truth for your whole team.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                See my dashboard
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                Book a demo →
              </a>
            </div>
          </div>
          <DashPreview />
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Everything a performance team checks every morning, in one place.
          </h2>
          <div className="vbx-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {BULLETS.map(b => (
              <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 18px', background: '#fff', borderRadius: 10, border: `0.5px solid ${BORDER}` }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="8" fill={PURPLE_BG}/><path d="M4.5 8L7 10.5L11.5 5.5" stroke={PURPLE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Connect your ad accounts and see everything at once.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Free to start. Takes about 5 minutes to connect.</p>
          <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 15, fontWeight: 600, padding: '13px 32px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
            Start free →
          </a>
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  )
}
