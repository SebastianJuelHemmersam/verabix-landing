'use client'

import { useState } from 'react'

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG      = '#0a0a0f'
const SURFACE = '#12121c'
const SURF2   = '#1a1a28'
const BORDER  = '#1e1e30'
const PURPLE  = '#8b7cf8'
const TEXT    = '#eeeeff'
const MUTED   = '#7880a0'
const GREEN   = '#22c55e'

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: `${BG}e8`, backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 28px',
        height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '9px',
            background: `linear-gradient(135deg, ${PURPLE}, #6c5ce7)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 4px 16px ${PURPLE}40`,
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
            </svg>
          </div>
          <span style={{ fontSize: '17px', fontWeight: '700', color: TEXT, letterSpacing: '-0.3px' }}>Verabix</span>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[['#features', 'Features'], ['#google-ads', 'Google Ads'], ['#waitlist', 'Waitlist']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: '14px', color: MUTED, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
              onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
              {label}
            </a>
          ))}
          <a href="#waitlist" style={{
            padding: '8px 20px', borderRadius: '8px',
            background: PURPLE, color: '#fff',
            fontSize: '13px', fontWeight: '600', textDecoration: 'none',
            boxShadow: `0 4px 16px ${PURPLE}40`, transition: 'opacity 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Join waitlist
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      padding: '160px 28px 100px',
      background: `radial-gradient(ellipse 90% 60% at 50% -10%, ${PURPLE}22 0%, transparent 65%), ${BG}`,
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: `${GREEN}18`, border: `1px solid ${GREEN}40`,
          borderRadius: '20px', padding: '5px 16px',
          fontSize: '12px', fontWeight: '600', color: GREEN,
          marginBottom: '32px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
          Now in open beta
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 72px)',
          fontWeight: '800', lineHeight: '1.05',
          letterSpacing: '-2.5px', color: TEXT,
          margin: '0 0 24px',
        }}>
          The <em style={{ fontStyle: 'italic', background: `linear-gradient(135deg, ${PURPLE}, #a29bfe)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>truth</em> of<br />your business
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(16px, 2.2vw, 19px)', color: MUTED,
          lineHeight: '1.7', maxWidth: '580px',
          margin: '0 auto 44px',
        }}>
          Verabix unifies Meta Ads, Google Ads and Google Analytics in one intelligent dashboard — so you make smarter decisions faster.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href="#waitlist" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: PURPLE, color: '#fff',
            fontSize: '15px', fontWeight: '700',
            padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none',
            boxShadow: `0 8px 32px ${PURPLE}50`,
            transition: 'all 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}>
            Join the waitlist
          </a>
          <a href="#features" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: MUTED,
            fontSize: '15px', fontWeight: '500',
            padding: '14px 24px', borderRadius: '10px',
            border: `1px solid ${BORDER}`,
            textDecoration: 'none', transition: 'all 0.15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${PURPLE}60`; e.currentTarget.style.color = TEXT }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = MUTED }}>
            See how it works →
          </a>
        </div>

        {/* Platform pills */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: '#555a72', marginRight: '4px' }}>Integrates with</span>
          {['Meta Ads', 'Google Ads', 'GA4', 'Slack'].map(s => (
            <span key={s} style={{
              fontSize: '12px', fontWeight: '500', color: MUTED,
              background: SURFACE, border: `1px solid ${BORDER}`,
              borderRadius: '6px', padding: '4px 11px',
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Dashboard mockup ─────────────────────────────────────────────────────────
const SPEND_BARS = [
  { day: 'Mon', val: 16800 }, { day: 'Tue', val: 21300 }, { day: 'Wed', val: 14500 },
  { day: 'Thu', val: 19700 }, { day: 'Fri', val: 22100 }, { day: 'Sat', val: 12400 }, { day: 'Sun', val: 15600 },
]
const MAX_BAR = Math.max(...SPEND_BARS.map(b => b.val))

function DashboardMockup() {
  return (
    <section style={{ padding: '0 28px 100px', background: BG }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Browser chrome */}
        <div style={{
          borderRadius: '14px', overflow: 'hidden',
          border: `1px solid ${BORDER}`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${BORDER}`,
        }}>
          {/* Top bar */}
          <div style={{
            background: SURF2, padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: '12px',
            borderBottom: `1px solid ${BORDER}`,
          }}>
            <div style={{ display: 'flex', gap: '7px' }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, maxWidth: '320px', margin: '0 auto',
              background: `${BG}80`, border: `1px solid ${BORDER}`,
              borderRadius: '6px', padding: '5px 12px',
              fontSize: '11px', color: '#555a72', textAlign: 'center',
            }}>
              app.verabix.com/dashboard
            </div>
          </div>

          {/* Dashboard content */}
          <div style={{ background: '#0d0d16', padding: '20px' }}>
            {/* KPI row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '16px' }}>
              {[
                { label: 'Total Spend', value: '124.320 kr.', delta: '+12.4%', up: true },
                { label: 'ROAS',        value: '3.8×',        delta: '+0.4×',  up: true },
                { label: 'Conversions', value: '284',          delta: '+23',    up: true },
                { label: 'CTR',         value: '2.4%',         delta: '−0.1%',  up: false },
              ].map(k => (
                <div key={k.label} style={{
                  background: SURFACE, border: `1px solid ${BORDER}`,
                  borderRadius: '10px', padding: '14px 16px',
                }}>
                  <div style={{ fontSize: '10px', color: MUTED, marginBottom: '6px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{k.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: TEXT, marginBottom: '4px' }}>{k.value}</div>
                  <div style={{ fontSize: '11px', color: k.up ? GREEN : '#f87171', fontWeight: '600' }}>{k.delta} vs last period</div>
                </div>
              ))}
            </div>

            {/* Bottom: chart + Vera chat */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '10px' }}>
              {/* Bar chart */}
              <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: TEXT, marginBottom: '14px' }}>Daily Spend (DKK)</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '80px' }}>
                  {SPEND_BARS.map(b => (
                    <div key={b.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: '100%', borderRadius: '4px 4px 0 0',
                        background: `linear-gradient(180deg, ${PURPLE}, ${PURPLE}88)`,
                        height: `${Math.round((b.val / MAX_BAR) * 80)}px`,
                      }} />
                      <div style={{ fontSize: '9px', color: MUTED }}>{b.day}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vera AI chat */}
              <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                  <div style={{
                    width: '22px', height: '22px', borderRadius: '6px',
                    background: `linear-gradient(135deg, ${PURPLE}, #6c5ce7)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: TEXT }}>Vera AI</span>
                </div>
                {/* User message */}
                <div style={{ background: `${PURPLE}22`, borderRadius: '8px 8px 2px 8px', padding: '8px 10px', fontSize: '11px', color: TEXT, alignSelf: 'flex-end', maxWidth: '85%' }}>
                  Which campaign has the best ROAS?
                </div>
                {/* Vera reply */}
                <div style={{ background: SURF2, borderRadius: '2px 8px 8px 8px', padding: '10px 12px', fontSize: '11px', color: MUTED, lineHeight: '1.6' }}>
                  <strong style={{ color: TEXT }}>Retargeting — DK</strong> is your top performer with a ROAS of <strong style={{ color: PURPLE }}>6.2×</strong>, spending 18,400 kr. Consider increasing its daily budget by 20% to capture more conversions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
    title: 'Unified dashboard',
    desc: 'Stop switching between Meta Ads Manager, Google Ads and Analytics. All your spend, ROAS, CPA and conversions in one view.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: 'Vera AI analyst',
    desc: 'Ask Vera anything about your campaigns and get instant, data-backed answers. Vera surfaces what matters so you don\'t have to dig.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Smart automations',
    desc: 'Set rules that act on your behalf — pause underperformers, alert on budget spikes, send weekly reports to Slack automatically.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
    title: 'Custom dashboards',
    desc: 'Tell Vera what you want to see and it builds the dashboard for you. Save and share views with your team in seconds.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: 'Attribution insights',
    desc: 'Understand which campaigns drive real conversions with GA4 data layered alongside your paid media performance.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>,
    title: 'Slack integration',
    desc: 'Receive automated alerts, weekly performance digests and Vera\'s recommendations directly in your Slack workspace.',
  },
]

function Features() {
  return (
    <section id="features" style={{ padding: '100px 28px', background: SURFACE, borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block', background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
            borderRadius: '20px', padding: '5px 16px',
            fontSize: '12px', fontWeight: '600', color: '#a29bfe', marginBottom: '20px',
          }}>Features</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', letterSpacing: '-1.5px', color: TEXT, margin: '0 0 14px' }}>
            Everything you need to scale smarter
          </h2>
          <p style={{ fontSize: '16px', color: MUTED, maxWidth: '420px', margin: '0 auto' }}>
            One platform. All your marketing data. Zero silos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: BG, border: `1px solid ${BORDER}`,
              borderRadius: '14px', padding: '26px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${PURPLE}50`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '11px',
                background: `${PURPLE}20`, color: PURPLE,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: TEXT, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', color: MUTED, lineHeight: '1.7', margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Google Ads section ───────────────────────────────────────────────────────
const GA_METRICS = [
  { label: 'Spend',       desc: 'Daily and lifetime spend across all campaigns' },
  { label: 'ROAS',        desc: 'Return on ad spend calculated in your currency' },
  { label: 'CTR',         desc: 'Click-through rate by campaign and ad group' },
  { label: 'CPA',         desc: 'Cost per conversion across your account' },
  { label: 'Conversions', desc: 'Track purchases, leads, and sign-up events' },
  { label: 'Impressions', desc: 'Reach and frequency across the Google network' },
]

const POLICY_POINTS = [
  "Connected via Google's official OAuth 2.0 — your credentials are never stored",
  'Data is used only to display your dashboard — nothing else',
  'We never sell, share, or transfer your Google Ads data to third parties',
  'Your data is never used for advertising or remarketing purposes',
  'Revoke access at any time from Verabix or from myaccount.google.com',
  'Fully compliant with the Google API Services User Data Policy (Limited Use)',
]

function GoogleAdsSection() {
  return (
    <section id="google-ads" style={{ padding: '100px 28px', background: BG, borderTop: `1px solid ${BORDER}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>

          {/* Left column */}
          <div>
            <div style={{
              display: 'inline-block', background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
              borderRadius: '20px', padding: '5px 16px',
              fontSize: '12px', fontWeight: '600', color: '#a29bfe', marginBottom: '20px',
            }}>Google Ads integration</div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '800', letterSpacing: '-1.2px', color: TEXT, margin: '0 0 16px' }}>
              Full visibility into your Google Ads data
            </h2>
            <p style={{ fontSize: '15px', color: MUTED, lineHeight: '1.75', margin: '0 0 32px' }}>
              Verabix connects to Google Ads through the official API using OAuth 2.0. We read your campaign performance and surface it alongside your Meta and GA4 data — so you have one complete picture of your marketing.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {GA_METRICS.map(m => (
                <div key={m.label} style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '10px', padding: '14px 16px' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: TEXT, marginBottom: '4px' }}>{m.label}</div>
                  <div style={{ fontSize: '11px', color: MUTED, lineHeight: '1.5' }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — policy box */}
          <div style={{
            background: `${PURPLE}0e`, border: `1px solid ${PURPLE}35`,
            borderRadius: '16px', padding: '32px',
          }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: TEXT, marginBottom: '6px' }}>
              How we use your Google Ads data
            </div>
            <div style={{ fontSize: '13px', color: MUTED, marginBottom: '24px', lineHeight: '1.6' }}>
              Your data privacy is not negotiable. Here is exactly what we do — and don't do — with the data we access.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {POLICY_POINTS.map(p => (
                <div key={p} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: `${GREEN}20`, border: `1px solid ${GREEN}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px',
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '13px', color: MUTED, lineHeight: '1.6' }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: `1px solid ${BORDER}`, fontSize: '12px', color: '#555a72' }}>
              Read our full{' '}
              <a href="/privacy" style={{ color: '#a29bfe', textDecoration: 'none' }}>Privacy Policy</a>
              {' '}for complete details on how we handle your data.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────
function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (res.ok) {
        setStatus('success')
      } else if (res.status === 409) {
        setStatus('duplicate')
      } else {
        const j = await res.json()
        setErrMsg(j.error || 'Something went wrong')
        setStatus('error')
      }
    } catch {
      setErrMsg('Network error — please try again')
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" style={{
      padding: '120px 28px',
      background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${PURPLE}18 0%, transparent 70%), ${SURFACE}`,
      borderTop: `1px solid ${BORDER}`,
    }}>
      <div style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
          borderRadius: '20px', padding: '5px 16px',
          fontSize: '12px', fontWeight: '600', color: '#a29bfe', marginBottom: '24px',
        }}>Early access</div>
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: '800', letterSpacing: '-1.5px', color: TEXT, margin: '0 0 16px' }}>
          Get early access
        </h2>
        <p style={{ fontSize: '16px', color: MUTED, margin: '0 0 44px', lineHeight: '1.65' }}>
          We&apos;re onboarding users gradually. Sign up to reserve your spot and we&apos;ll reach out when you&apos;re in.
        </p>

        {status === 'success' ? (
          <div style={{ background: '#0a1f12', border: '1px solid #16a34a50', borderRadius: '14px', padding: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#16a34a20', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: TEXT, marginBottom: '8px' }}>You&apos;re on the list!</div>
            <div style={{ fontSize: '14px', color: MUTED }}>We&apos;ll reach out when your spot is ready. No spam, ever.</div>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{
              display: 'flex', gap: '10px',
              background: SURFACE, border: `1px solid ${BORDER}`,
              borderRadius: '12px', padding: '6px',
            }}>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                style={{
                  flex: 1, minWidth: 0, padding: '10px 14px',
                  background: 'transparent', border: 'none',
                  color: TEXT, fontSize: '14px', outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                style={{
                  padding: '10px 24px', background: status === 'loading' ? '#6a5cc0' : PURPLE,
                  border: 'none', borderRadius: '8px', color: '#fff',
                  fontSize: '14px', fontWeight: '700',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap', transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                {status === 'loading' ? 'Joining…' : 'Join waitlist'}
              </button>
            </div>
            {status === 'duplicate' && <p style={{ marginTop: '12px', fontSize: '13px', color: MUTED }}>This email is already on the waitlist.</p>}
            {status === 'error'     && <p style={{ marginTop: '12px', fontSize: '13px', color: '#f87171' }}>{errMsg}</p>}
            <p style={{ marginTop: '14px', fontSize: '12px', color: '#3d4158' }}>No credit card required. No spam.</p>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, background: BG, padding: '28px 28px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '13px', color: '#3d4158', margin: 0 }}>
          © 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            ['Privacy Policy', '/privacy'],
            ['Terms of Service', '/terms'],
            ['Contact', 'mailto:admin@verabix.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: '13px', color: '#3d4158', textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = MUTED)}
              onMouseLeave={e => (e.currentTarget.style.color = '#3d4158')}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <DashboardMockup />
        <Features />
        <GoogleAdsSection />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
