'use client'

import { useState, useEffect } from 'react'

// ─── Inline styles helpers ───────────────────────────────────────────────────
const P = '#534AB7'
const PD = '#3d3589'
const PL = '#eeecf9'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
      transition: 'all 0.2s',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: P, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
            </svg>
          </div>
          <span style={{ fontSize: '17px', fontWeight: '700', color: '#0f1117', letterSpacing: '-0.3px' }}>
            Verabix
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#features" style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}
            onMouseEnter={e => (e.currentTarget.style.color = P)}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
            Features
          </a>
          <a href="#pricing" style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}
            onMouseEnter={e => (e.currentTarget.style.color = P)}
            onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
            Pricing
          </a>
          <a
            href="https://app.verabix.com/login"
            style={{
              fontSize: '14px', fontWeight: '600', color: '#fff',
              background: P, padding: '8px 20px', borderRadius: '8px',
              border: 'none', transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = PD)}
            onMouseLeave={e => (e.currentTarget.style.background = P)}
          >
            Get started
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
      background: 'linear-gradient(165deg, #faf9ff 0%, #f0eeff 40%, #ffffff 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '900px', borderRadius: '50%',
        background: `radial-gradient(circle, ${P}0d 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', position: 'relative' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: PL, color: P, fontSize: '12px', fontWeight: '600',
          padding: '5px 14px', borderRadius: '20px', marginBottom: '28px',
          letterSpacing: '0.3px',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: P, display: 'inline-block',
          }} />
          Now in beta — free to try
        </div>

        <h1 style={{
          fontSize: 'clamp(42px, 7vw, 72px)',
          fontWeight: '800',
          lineHeight: '1.08',
          letterSpacing: '-2px',
          color: '#0f1117',
          marginBottom: '24px',
        }}>
          The truth of your<br />
          <span style={{ color: P }}>business</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2.2vw, 20px)',
          color: '#6b7280',
          lineHeight: '1.65',
          maxWidth: '580px',
          margin: '0 auto 44px',
        }}>
          Verabix unifies your Meta Ads, Google Ads and Google Analytics data
          in one powerful dashboard — so you can make smarter decisions faster.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://app.verabix.com/login"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: P, color: '#fff', fontWeight: '600',
              fontSize: '15px', padding: '14px 28px', borderRadius: '10px',
              transition: 'all 0.15s', boxShadow: `0 4px 20px ${P}40`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = PD
              e.currentTarget.style.boxShadow = `0 6px 28px ${P}55`
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = P
              e.currentTarget.style.boxShadow = `0 4px 20px ${P}40`
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Start for free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#features"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#fff', color: '#0f1117', fontWeight: '600',
              fontSize: '15px', padding: '14px 28px', borderRadius: '10px',
              border: '1.5px solid #e5e7eb', transition: 'all 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = P
              e.currentTarget.style.color = P
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.color = '#0f1117'
            }}
          >
            See how it works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* Social proof */}
        <div style={{ marginTop: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          {['Meta Ads', 'Google Ads', 'Google Analytics'].map(src => (
            <div key={src} style={{
              display: 'flex', alignItems: 'center', gap: '7px',
              fontSize: '13px', color: '#9ca3af', fontWeight: '500',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {src}
            </div>
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Unified Dashboard',
    desc: 'See all your KPIs across every channel in one place — ROAS, CPA, CTR, and more at a glance.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M21.17 8H12V2.83" />
      </svg>
    ),
    title: 'AI Analyst (Vera)',
    desc: 'Ask Vera anything about your data and get instant insights powered by AI — no SQL needed.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
      </svg>
    ),
    title: 'Campaign Overview',
    desc: 'Monitor all campaigns across Meta, Google and more with real-time spend and performance data.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
    title: 'Creative Intelligence',
    desc: 'Discover your best performing creatives sorted by CTR, ROAS, and engagement rate.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Multi-channel',
    desc: 'Connect Meta Ads, Google Ads, Google Analytics and more — all your data in one source of truth.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Secure by design',
    desc: 'AES-256 encryption, audit logs and enterprise-grade security — your data stays yours.',
  },
]

function Features() {
  return (
    <section id="features" style={{
      padding: '100px 24px',
      background: '#fff',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: PL, color: P, fontSize: '12px', fontWeight: '600',
            padding: '5px 14px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.3px',
          }}>
            Features
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: '800', letterSpacing: '-1.5px',
            color: '#0f1117', marginBottom: '16px',
          }}>
            Everything you need to scale
          </h2>
          <p style={{ fontSize: '17px', color: '#6b7280', maxWidth: '480px', margin: '0 auto' }}>
            One platform, all your marketing data, zero data silos.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#faf9ff' : '#f8f9fc',
        border: `1.5px solid ${hovered ? P + '40' : '#e5e7eb'}`,
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 32px ${P}14` : 'none',
      }}
    >
      <div style={{
        width: '46px', height: '46px', borderRadius: '12px',
        background: hovered ? P : PL,
        color: hovered ? '#fff' : P,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
        transition: 'all 0.2s',
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1117', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.65' }}>
        {desc}
      </p>
    </div>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Perfect to get started',
    popular: false,
    features: [
      '1 data source',
      'Basic dashboard',
      'Vera AI chat',
      'Last 30 days data',
      'Email support',
    ],
    cta: 'Start for free',
    ctaHref: 'https://app.verabix.com/login',
  },
  {
    name: 'Pro',
    price: '€49',
    period: '/month',
    desc: 'For growing teams',
    popular: true,
    features: [
      '5 data sources',
      'All dashboard features',
      'Vera AI analyst',
      'Unlimited date range',
      'Creative Intelligence',
      'Priority support',
    ],
    cta: 'Start free trial',
    ctaHref: 'https://app.verabix.com/login',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organisations',
    popular: false,
    features: [
      'Unlimited data sources',
      'Custom integrations',
      'Dedicated CSM',
      'SLA & audit logs',
      'SSO / SAML',
      'On-prem option',
    ],
    cta: 'Contact us',
    ctaHref: 'mailto:hello@verabix.com',
  },
]

function Pricing() {
  return (
    <section id="pricing" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #f8f9fc 0%, #fff 100%)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-block',
            background: PL, color: P, fontSize: '12px', fontWeight: '600',
            padding: '5px 14px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.3px',
          }}>
            Pricing
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: '800', letterSpacing: '-1.5px',
            color: '#0f1117', marginBottom: '16px',
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{ fontSize: '17px', color: '#6b7280' }}>
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {PLANS.map(plan => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: typeof PLANS[number] }) {
  const [hovered, setHovered] = useState(false)
  const highlight = plan.popular

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: highlight ? P : '#fff',
        border: `1.5px solid ${highlight ? P : hovered ? P + '50' : '#e5e7eb'}`,
        borderRadius: '20px',
        padding: '32px',
        position: 'relative',
        transition: 'all 0.2s',
        transform: highlight ? 'scale(1.03)' : hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: highlight
          ? `0 16px 48px ${P}35`
          : hovered ? `0 8px 32px ${P}14` : 'none',
      }}
    >
      {/* Popular badge */}
      {highlight && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
          background: '#fff', color: P, fontSize: '11px', fontWeight: '700',
          padding: '4px 14px', borderRadius: '20px',
          boxShadow: `0 2px 8px ${P}30`,
          letterSpacing: '0.4px', whiteSpace: 'nowrap',
        }}>
          MOST POPULAR
        </div>
      )}

      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '13px', fontWeight: '600',
          color: highlight ? 'rgba(255,255,255,0.7)' : '#6b7280',
          marginBottom: '6px',
        }}>
          {plan.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px' }}>
          <span style={{
            fontSize: '42px', fontWeight: '800', letterSpacing: '-2px',
            color: highlight ? '#fff' : '#0f1117',
          }}>
            {plan.price}
          </span>
          {plan.period && (
            <span style={{ fontSize: '15px', color: highlight ? 'rgba(255,255,255,0.6)' : '#9ca3af' }}>
              {plan.period}
            </span>
          )}
        </div>
        <p style={{ fontSize: '13px', color: highlight ? 'rgba(255,255,255,0.65)' : '#6b7280' }}>
          {plan.desc}
        </p>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px',
        background: highlight ? 'rgba(255,255,255,0.2)' : '#e5e7eb',
        marginBottom: '24px',
      }} />

      {/* Features list */}
      <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {plan.features.map(feat => (
          <li key={feat} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            fontSize: '14px', color: highlight ? 'rgba(255,255,255,0.9)' : '#374151',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke={highlight ? 'rgba(255,255,255,0.8)' : P}
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={plan.ctaHref}
        style={{
          display: 'block', textAlign: 'center',
          padding: '13px 24px', borderRadius: '10px',
          fontSize: '14px', fontWeight: '700',
          background: highlight ? '#fff' : P,
          color: highlight ? P : '#fff',
          border: highlight ? 'none' : 'none',
          transition: 'all 0.15s',
        }}
        onMouseEnter={e => {
          if (highlight) {
            e.currentTarget.style.background = PL
          } else {
            e.currentTarget.style.background = PD
          }
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = highlight ? '#fff' : P
        }}
      >
        {plan.cta}
      </a>
    </div>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: '#0f1117',
      color: '#9ca3af',
      padding: '60px 24px 36px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: '32px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                width: '30px', height: '30px', borderRadius: '7px',
                background: P, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
                </svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>Verabix</span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.65', color: '#6b7280' }}>
              The truth of your business. Unify your ad data and make smarter decisions, faster.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '16px' }}>
                Product
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[['Features', '#features'], ['Pricing', '#pricing']].map(([label, href]) => (
                  <a key={label} href={href} style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '16px' }}>
                Legal
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms']].map(([label, href]) => (
                  <a key={label} href={href} style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '16px' }}>
                Company
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="mailto:hello@verabix.com" style={{ fontSize: '14px', color: '#6b7280', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid #1f2937',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
          fontSize: '13px', color: '#4b5563',
        }}>
          <span>© 2026 Verabix. All rights reserved.</span>
          <span>Built for modern marketers.</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
