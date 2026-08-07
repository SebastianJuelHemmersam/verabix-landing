import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Multi-workspace & Slack Integration — Separate dashboards per client or market',
  description: 'Each client or market gets its own isolated Verabix workspace. And Vera is available directly in Slack — ask questions, get alerts, and act without opening another tab.',
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
  'Separate workspaces per client or market — data never bleeds between accounts',
  'Switch workspace in one click — no logging out or juggling browser tabs',
  'Vera available directly in Slack — tag @Vera to get answers without opening the app',
  'Proactive Slack alerts when spend spikes, ROAS drops, or a rule fires',
  'Each workspace has its own connected Meta, Google Ads, and GA4 accounts',
  'Team members invited per workspace — share only what each person should see',
]

const WORKSPACES = [
  { name: 'Acme Fashion — DK',  spend: '€12.4k', roas: '4.2×', active: true },
  { name: 'Nordkapp Media',      spend: '€8.1k',  roas: '3.9×', active: false },
  { name: 'BlueWave Supplements',spend: '€21.7k', roas: '5.1×', active: false },
]

const SLACK_MESSAGES = [
  { sender: 'Vera', text: 'Good morning! Acme Fashion DK spent €2,340 yesterday. ROAS: 4.8×, up +0.4 vs last week. Top campaign: Branded Search at 7.2× ROAS.' },
  { sender: 'You', text: 'Which ad set should I pause in Meta?' },
  { sender: 'Vera', text: 'Retargeting — 30d has ROAS 1.2× on €340 spend over 7 days. I\'d pause it and reallocate to Lookalike — Purchasers which is at 5.3×.' },
]

export default function MultiWorkspacePage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Multi-workspace &amp; Slack
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              One login. Every client. Vera in Slack.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Each client or market gets a fully isolated Verabix workspace with its own connected ad accounts, dashboard, and data. Switch between them instantly — and get Vera in your Slack workspace so questions get answered without switching tabs.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Set up workspaces
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                Book a demo →
              </a>
            </div>
          </div>

          {/* Split preview: workspaces + Slack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Workspace switcher */}
            <div style={{ background: '#fff', borderRadius: 12, padding: '14px 16px', boxShadow: '0 4px 16px rgba(0,0,0,.08), 0 0 0 1px rgba(0,0,0,.05)' }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>Workspaces</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {WORKSPACES.map(w => (
                  <div key={w.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, background: w.active ? PURPLE_BG : SURF, border: `0.5px solid ${w.active ? '#AFA9EC' : BORDER}` }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: w.active ? PURPLE : '#D1D5DB', flexShrink: 0 }} />
                    <div style={{ flex: 1, fontSize: 11, fontWeight: w.active ? 600 : 400, color: TEXT }}>{w.name}</div>
                    <div style={{ fontSize: 10, color: MUTED }}>{w.spend}</div>
                    <div style={{ fontSize: 10, color: w.active ? PURPLE : MUTED, fontWeight: 600 }}>{w.roas}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Slack preview */}
            <div style={{ background: '#3F0E40', borderRadius: 12, padding: '14px 16px', boxShadow: '0 4px 16px rgba(0,0,0,.12)' }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 10 }}>#marketing · Slack</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SLACK_MESSAGES.map((m, i) => {
                  const isVera = m.sender === 'Vera'
                  return (
                    <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 4, background: isVera ? 'linear-gradient(135deg,#534AB7,#7C3AED)' : '#E8E8E8', color: isVera ? '#fff' : '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 700, flexShrink: 0 }}>
                        {isVera ? 'V' : 'U'}
                      </div>
                      <div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: isVera ? '#B39DDB' : 'rgba(255,255,255,0.6)', marginBottom: 2 }}>{m.sender}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{m.text}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Built for teams managing multiple clients or markets.
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
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Manage all your clients from one place.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Free to start. Add workspaces as you grow.</p>
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
