import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Instant Campaign Creation — From URL to live campaign in minutes',
  description: 'Paste your landing page URL, pick a goal, and Vera builds a complete Meta and Google Ads campaign with AI-generated copy, targeting, and creative.',
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
  'Vera reads your landing page URL and generates headlines, primary text, and descriptions',
  'Supports Meta Ads (image + video) and Google Ads (Search + PMax) simultaneously',
  'Image upload with crop-to-format for every Meta and Google creative slot',
  'Video creative with drag-and-drop upload and automatic thumbnail generation',
  'YouTube video URLs added as PMax asset group video assets',
  'Review all copy and settings before launch — you stay in control',
]

const STEPS = [
  { n: '1', title: 'Paste your URL', desc: 'Vera reads your page and understands your product, offer, and audience.' },
  { n: '2', title: 'Pick a goal',    desc: 'Sales, traffic, leads or awareness — Vera configures the campaign type.' },
  { n: '3', title: 'Add creatives',  desc: 'Upload images or video, or let Vera suggest visuals from your page.' },
  { n: '4', title: 'Review & launch', desc: 'See the complete campaign brief. Launch to Meta, Google, or both.' },
]

export default function InstantCampaignsPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Instant Campaign Creation
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              From URL to live campaign in minutes.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Paste your landing page URL, pick a goal, and Vera builds a complete campaign — AI-generated headlines, ad copy, and targeting — ready to push to Meta Ads and Google Ads without leaving Verabix.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Launch your first campaign
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                See a demo →
              </a>
            </div>
          </div>
          {/* Steps mock */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: i === 3 ? PURPLE : PURPLE_BG, color: i === 3 ? '#fff' : PURPLE, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{s.n}</div>
                <div style={{ background: i === 3 ? PURPLE_BG : SURF, borderRadius: 10, padding: '12px 14px', flex: 1, border: `0.5px solid ${i === 3 ? '#AFA9EC' : BORDER}` }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 3 }}>{s.title}</div>
                  <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Everything Vera handles for you on the way to launch.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Launch your next campaign in the time it takes to brief an agency.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Free to start. No credit card required.</p>
          <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 15, fontWeight: 600, padding: '13px 32px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
            Try it free →
          </a>
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  )
}
