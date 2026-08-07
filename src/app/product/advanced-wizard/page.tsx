import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Advanced Campaign Wizard — Full manual control over Meta + Google Ads',
  description: 'Six-step guided wizard for launching campaigns on Meta Ads and Google Ads simultaneously, with full control over audience, budget, creative and review.',
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
  'Launch to Meta Ads, Google Ads, or both platforms simultaneously',
  'Full audience configuration: locations, age, gender, custom audiences, detailed targeting',
  'Video creative with drag-and-drop upload, progress bar, and automatic thumbnail generation',
  'YouTube video URLs as Google PMax video asset group assets',
  'Per-campaign Facebook Page selection — not just account default',
  'Save as draft at any step; come back and resume anytime',
]

const STEPS = [
  { label: 'Platform', desc: 'Meta, Google Ads, or both' },
  { label: 'Goal', desc: 'Objective and conversion tracking' },
  { label: 'Audience', desc: 'Targeting, locations, demographics' },
  { label: 'Budget', desc: 'Daily budget and schedule' },
  { label: 'Creative', desc: 'Images, video, copy and page' },
  { label: 'Review', desc: 'Preview and launch' },
]

export default function AdvancedWizardPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Advanced Campaign Wizard
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              Full control, step by step.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              When you need to manually configure every setting — audience, budget, creative, platform — the Advanced Campaign Wizard gives you a guided 6-step flow with nothing skipped. Launch to Meta, Google Ads, or both simultaneously.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Open wizard
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                See a demo →
              </a>
            </div>
          </div>
          {/* 6-step visual */}
          <div style={{ background: '#fff', borderRadius: 14, padding: 20, boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>Campaign wizard · 6 steps</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {STEPS.map((s, i) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 8, background: i === 4 ? PURPLE_BG : SURF, border: `0.5px solid ${i === 4 ? '#AFA9EC' : BORDER}` }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: i < 4 ? PURPLE : i === 4 ? PURPLE : '#D1D5DB', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0 }}>
                    {i < 4 ? '✓' : i + 1}
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>{s.label}</div>
                    <div style={{ fontSize: 11, color: MUTED }}>{s.desc}</div>
                  </div>
                  {i === 4 && <div style={{ marginLeft: 'auto', fontSize: 10, color: PURPLE, fontWeight: 600 }}>Current</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Every setting you need. Nothing you don&apos;t.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Ready to launch your next campaign with full control?</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Free to start. Takes about 5 minutes from account connection to first campaign.</p>
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
