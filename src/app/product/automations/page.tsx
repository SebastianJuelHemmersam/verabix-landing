import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Automations — Rule-based budget and bidding actions across Meta and Google Ads',
  description: 'Set rules that pause campaigns, adjust budgets, or send Slack alerts when spend or ROAS hits a threshold — across Meta Ads and Google Ads simultaneously.',
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
  'Pause campaigns automatically when ROAS drops below your defined threshold',
  'Scale budgets up when a campaign exceeds target CPA or ROAS — no manual check needed',
  'Cross-channel rules: apply the same logic to Meta and Google Ads at once',
  'Send Slack alerts when a rule fires — so nothing slips through while you sleep',
  'Rules run on a schedule you control: hourly, daily, or on a custom cadence',
  'Review rule history and see exactly what changed and why',
]

const RULES = [
  {
    label: 'If daily spend > €500 and ROAS < 2.5×',
    action: '→ Pause campaign + notify Slack',
    status: 'active',
  },
  {
    label: 'If CPA < €18 for 3 consecutive days',
    action: '→ Increase budget by 20%',
    status: 'active',
  },
  {
    label: 'If impression share < 30% and ROAS > 5×',
    action: '→ Increase daily budget by €50',
    status: 'paused',
  },
]

export default function AutomationsPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Automations
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              Rules that act while you sleep.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Set conditions once — if ROAS drops, pause the campaign. If CPA improves for three days, increase the budget. Verabix runs the checks and takes the action across Meta and Google Ads so you don&apos;t have to.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Set up automations
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                See a demo →
              </a>
            </div>
          </div>
          {/* Rules preview */}
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>Active rules · all channels</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {RULES.map(r => (
                <div key={r.label} style={{ background: SURF, borderRadius: 10, padding: '12px 14px', border: `0.5px solid ${BORDER}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 11, color: TEXT, fontWeight: 500, lineHeight: 1.45, marginBottom: 4 }}>{r.label}</div>
                      <div style={{ fontSize: 11, color: PURPLE, fontWeight: 600 }}>{r.action}</div>
                    </div>
                    <div style={{ fontSize: 9, fontWeight: 700, padding: '3px 8px', borderRadius: 999, background: r.status === 'active' ? '#DCFCE7' : '#F3F4F6', color: r.status === 'active' ? '#15803D' : '#6B7280', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      {r.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, fontSize: 11, color: MUTED, borderTop: `0.5px solid ${BORDER}`, paddingTop: 12 }}>
              Last checked: 8 minutes ago · Next check in 52 min
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            The actions you&apos;d take manually — automated at scale.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Stop checking ad performance manually.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Set up your first rule in under two minutes. Free to start.</p>
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
