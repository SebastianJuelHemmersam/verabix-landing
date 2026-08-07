import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Verabix for E-commerce Brands — Cross-market ROAS and creative performance',
  description: 'Track performance per market, reconcile attribution, and manage creative fatigue across Meta and Google Ads — from one dashboard.',
}

const PURPLE    = '#534AB7'
const PURPLE_BG = '#EEEDFE'
const TEXT      = '#1A1F36'
const MUTED     = '#697386'
const BORDER    = '#E3E8EF'
const TINT      = '#F6F9FC'
const FONT      = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

const BULLETS = [
  'Separate workspaces per market — DK, SE, DE each get their own dashboard',
  'Creative breakdown by ad unit: see which format and copy drive the best ROAS',
  'Attribution comparison: platform-reported conversions vs GA4-observed — know who to trust',
  'Multi-account Meta and Google Ads managed from a single login',
  'Launch localised campaigns directly from Verabix — no Ads Manager tab needed',
  'Vera explains creative fatigue, audience overlap, and ROAS dips automatically',
]

function AttributionPreview() {
  const rows = [
    { name: 'Meta Ads (DK)',   platform: 1240, ga4: 760 },
    { name: 'Google Ads (DK)', platform: 980,  ga4: 1120 },
    { name: 'Meta Ads (SE)',   platform: 620,  ga4: 410 },
  ]
  const max = 1240
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)', fontFamily: FONT }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#534AB7,#7C3AED)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 9, flexShrink: 0 }}>V</div>
        <span style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>Attribution discrepancy — last 30d</span>
      </div>
      <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.55, margin: '0 0 16px' }}>
        Meta DK reports <b style={{ color: TEXT }}>+63%</b> more conversions than GA4. Most likely view-through and cookie loss.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {rows.map(r => (
          <div key={r.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 4 }}>
              <span style={{ color: TEXT, fontWeight: 500 }}>{r.name}</span>
              <span style={{ color: MUTED }}>Platform: {r.platform} / GA4: {r.ga4}</span>
            </div>
            <div style={{ display: 'flex', gap: 3, height: 14 }}>
              <div style={{ flex: 1, background: '#F0F2F7', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${(r.platform / max) * 100}%`, height: '100%', background: PURPLE }} />
              </div>
              <div style={{ flex: 1, background: '#F0F2F7', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${(r.ga4 / max) * 100}%`, height: '100%', background: '#F9AB00' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 14, fontSize: 10, color: MUTED }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, background: PURPLE, borderRadius: 2 }} />Platform-reported</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, background: '#F9AB00', borderRadius: 2 }} />GA4 observed</span>
      </div>
    </div>
  )
}

export default function EcommercePage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Solutions · E-commerce Brands
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              Cross-market ROAS and creative performance, all in one place.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              E-commerce brands running Meta and Google across multiple countries need per-market ROAS, creative fatigue detection, and honest attribution. Verabix handles all of it — without the spreadsheet chaos.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Start free
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                Book a demo →
              </a>
            </div>
          </div>
          <AttributionPreview />
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Built for multi-market, multi-platform ad management.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Scale with confidence across every market.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Free to start. No credit card required.</p>
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
