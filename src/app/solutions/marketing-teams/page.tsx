import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Verabix for In-house Marketing Teams — Own your data without hiring an analyst',
  description: 'Unified dashboard for Meta Ads, Google Ads and Google Analytics. Vera AI answers performance questions instantly. Automated Slack briefs keep the whole team aligned.',
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
  'Unified dashboard: Meta Ads, Google Ads, GA4 — one source of truth',
  'Vera AI explains anomalies in plain English, no SQL required',
  'Daily 9am Slack brief, configurable by channel and platform',
  'Attribution comparison: platform-reported vs GA4-observed conversions',
  'Set automation rules once — Vera pauses low-ROAS campaigns automatically',
  'Share live dashboards with stakeholders via Slack or a direct link',
]

function SlackPreview() {
  return (
    <div style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)', fontFamily: FONT }}>
      <div style={{ background: '#F8F8F8', padding: '10px 16px', borderBottom: `1px solid ${BORDER}`, fontSize: 13, color: '#1D1C1D', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ color: '#616061' }}>#</span> marketing-weekly
      </div>
      <div style={{ display: 'flex', gap: 10, padding: '14px 16px', alignItems: 'flex-start' }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, flexShrink: 0, background: 'linear-gradient(135deg,#534AB7,#7C3AED)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>V</div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: '#1D1C1D' }}>Vera</span>
            <span style={{ fontSize: 9, fontWeight: 700, background: '#E8E8E8', color: '#616061', padding: '1px 4px', borderRadius: 3 }}>APP</span>
            <span style={{ fontSize: 11, color: '#9CA3AF' }}>9:00 AM</span>
          </div>
          <div style={{ fontSize: 13, color: '#1D1C1D', lineHeight: 1.5 }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>📊 Weekly performance brief — Monday, 9am</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div>Meta Ads: <b>€22.4k</b> spend · ROAS <b style={{ color: '#0A8550' }}>3.8× (+0.4)</b></div>
              <div>Google Ads: <b>€14.1k</b> spend · ROAS <b style={{ color: '#0A8550' }}>5.2× (+0.1)</b></div>
              <div>GA4: <b>1,840 conversions</b> · <b style={{ color: '#C0123C' }}>-11% vs platform</b></div>
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: '#616061' }}>
              ⚠️ Attribution gap: Meta reports 39% more conversions than GA4. Likely view-through windows.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function MarketingTeamsPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Solutions · In-house Marketing
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              Own your marketing data without hiring an analyst.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Marketing teams spend half their time pulling numbers from different tools and the other half arguing about which number is right. Verabix unifies Meta, Google Ads and GA4 in one place — so Vera can answer &ldquo;why is CPA up?&rdquo; before your Monday meeting.
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
          <SlackPreview />
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Stop exporting spreadsheets. Start getting answers.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Ready to stop fighting your data?</h2>
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
