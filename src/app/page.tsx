'use client'

import { useState } from 'react'

const BG      = '#0d0f1a'
const SURFACE = '#151829'
const BORDER  = '#1e2235'
const PURPLE  = '#6C5CE7'
const TEXT    = '#f0f2ff'
const MUTED   = '#8b90a8'

// ─── Reusable hover link ──────────────────────────────────────────────────────
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: '14px', fontWeight: '500',
        color: hov ? TEXT : MUTED,
        transition: 'color 0.15s', textDecoration: 'none',
      }}
    >
      {children}
    </a>
  )
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: `${BG}e6`, backdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${BORDER}`,
    }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto', padding: '0 24px',
        height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '8px',
            background: PURPLE,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
            </svg>
          </div>
          <span style={{ fontSize: '16px', fontWeight: '700', color: TEXT, letterSpacing: '-0.3px' }}>
            Verabix
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#waitlist">Waitlist</NavLink>
          <a
            href="#waitlist"
            style={{
              padding: '7px 18px', borderRadius: '8px',
              background: PURPLE, color: '#fff',
              fontSize: '13px', fontWeight: '600',
              textDecoration: 'none', transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
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
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${PURPLE}18 0%, transparent 70%), ${BG}`,
      position: 'relative',
    }}>
      <div style={{ maxWidth: '700px' }}>
        {/* Logo */}
        <div style={{
          width: '64px', height: '64px', borderRadius: '18px',
          background: `linear-gradient(135deg, ${PURPLE}, #a29bfe)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          boxShadow: `0 12px 40px ${PURPLE}45`,
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
          </svg>
        </div>

        {/* Pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
          borderRadius: '20px', padding: '5px 14px',
          fontSize: '12px', fontWeight: '600', color: '#a29bfe',
          marginBottom: '28px', letterSpacing: '0.2px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a29bfe', display: 'inline-block' }} />
          Now in beta — join the waitlist
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 68px)',
          fontWeight: '800',
          lineHeight: '1.07',
          letterSpacing: '-2px',
          color: TEXT,
          margin: '0 0 22px',
        }}>
          The truth of your<br />
          <span style={{
            background: `linear-gradient(135deg, ${PURPLE}, #a29bfe)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>business</span>
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: MUTED,
          lineHeight: '1.7',
          maxWidth: '520px',
          margin: '0 auto 44px',
        }}>
          Marketing analytics platform that unifies Meta Ads, Google Ads and
          Google Analytics in one dashboard — so you make smarter decisions faster.
        </p>

        <a
          href="#waitlist"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: PURPLE, color: '#fff',
            fontSize: '15px', fontWeight: '700',
            padding: '14px 32px', borderRadius: '10px',
            textDecoration: 'none',
            boxShadow: `0 6px 28px ${PURPLE}50`,
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Join waitlist
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Integrations row */}
        <div style={{
          marginTop: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '8px', flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '12px', color: '#555a72', marginRight: '4px' }}>Integrates with</span>
          {['Meta Ads', 'Google Ads', 'Google Analytics'].map(s => (
            <span key={s} style={{
              fontSize: '12px', fontWeight: '500', color: MUTED,
              background: SURFACE, border: `1px solid ${BORDER}`,
              borderRadius: '6px', padding: '4px 10px',
            }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'All your data in one place',
    desc: 'Stop switching between Meta Ads Manager, Google Ads and Analytics. See your spend, ROAS, CPA and conversions in a single unified view.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Vera AI agent',
    desc: 'Ask Vera anything — "Which campaign has the lowest CPA?" or "Where should I cut budget?" — and get instant, data-backed answers.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Real-time insights',
    desc: 'Live data from all your ad platforms, refreshed automatically. Catch performance drops before they cost you — not the day after.',
  },
]

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: '1 1 280px',
        background: hov ? '#1a1e31' : SURFACE,
        border: `1px solid ${hov ? PURPLE + '50' : BORDER}`,
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.2s',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hov ? `0 12px 40px ${PURPLE}20` : 'none',
      }}
    >
      <div style={{
        width: '46px', height: '46px', borderRadius: '12px',
        background: hov ? PURPLE : `${PURPLE}20`,
        color: hov ? '#fff' : PURPLE,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px', transition: 'all 0.2s',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: TEXT, marginBottom: '10px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: MUTED, lineHeight: '1.7', margin: 0 }}>
        {desc}
      </p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" style={{
      padding: '100px 24px',
      background: BG,
    }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
            borderRadius: '20px', padding: '5px 14px',
            fontSize: '12px', fontWeight: '600', color: '#a29bfe',
            marginBottom: '18px',
          }}>
            Features
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: '800', letterSpacing: '-1.5px',
            color: TEXT, margin: '0 0 14px',
          }}>
            Everything you need to scale
          </h2>
          <p style={{ fontSize: '16px', color: MUTED, maxWidth: '420px', margin: '0 auto' }}>
            One platform, all your marketing data — zero data silos.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {FEATURES.map(f => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Waitlist ────────────────────────────────────────────────────────────────
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
      padding: '100px 24px',
      background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${PURPLE}15 0%, transparent 70%), ${BG}`,
    }}>
      <div style={{
        maxWidth: '520px', margin: '0 auto', textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
          borderRadius: '20px', padding: '5px 14px',
          fontSize: '12px', fontWeight: '600', color: '#a29bfe',
          marginBottom: '20px',
        }}>
          Early access
        </div>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: '800', letterSpacing: '-1.5px',
          color: TEXT, margin: '0 0 14px',
        }}>
          Get early access
        </h2>
        <p style={{ fontSize: '16px', color: MUTED, margin: '0 0 40px', lineHeight: '1.65' }}>
          Be among the first to use Verabix. We&apos;re onboarding new users gradually — sign up to reserve your spot.
        </p>

        {status === 'success' ? (
          <div style={{
            background: '#0a1f12',
            border: '1px solid #16a34a50',
            borderRadius: '14px',
            padding: '28px',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#16a34a20',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 14px',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: TEXT, marginBottom: '8px' }}>
              You&apos;re on the list!
            </div>
            <div style={{ fontSize: '14px', color: MUTED }}>
              We&apos;ll reach out when your spot is ready. No spam, ever.
            </div>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{
              display: 'flex', gap: '10px', flexWrap: 'wrap',
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: '12px',
              padding: '6px',
            }}>
              <input
                type="email"
                value={email}
                onChange={e => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
                placeholder="your@email.com"
                required
                disabled={status === 'loading'}
                style={{
                  flex: 1, minWidth: '200px',
                  padding: '10px 14px',
                  background: 'transparent',
                  border: 'none',
                  color: TEXT,
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                style={{
                  padding: '10px 22px',
                  background: status === 'loading' ? '#4a3fa0' : PURPLE,
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                {status === 'loading' ? 'Joining…' : 'Join waitlist'}
              </button>
            </div>

            {status === 'duplicate' && (
              <p style={{ marginTop: '12px', fontSize: '13px', color: MUTED }}>
                This email is already on the waitlist.
              </p>
            )}
            {status === 'error' && (
              <p style={{ marginTop: '12px', fontSize: '13px', color: '#f87171' }}>
                {errMsg}
              </p>
            )}

            <p style={{ marginTop: '14px', fontSize: '12px', color: '#3d4158' }}>
              No credit card required. No spam.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: `1px solid ${BORDER}`,
      background: BG,
      padding: '28px 24px',
      textAlign: 'center',
    }}>
      <p style={{ fontSize: '13px', color: '#3d4158', margin: 0 }}>
        © 2026 Verabix · No spam, ever.
      </p>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div style={{ background: BG, minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
