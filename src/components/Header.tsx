'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const INK    = '#1B3A8C'
const BLACK  = '#000000'
const GREY50 = '#FAFAFA'
const GREY200= '#EBEBEB'
const GREY600= '#666666'
const FONT   = 'var(--font-sans, system-ui, "Helvetica Neue", Arial, sans-serif)'

const SOLUTIONS = [
  { href: '/solutions/agencies',        label: 'Ad Agencies',         desc: 'One workspace per client. Unified cross-channel reporting.' },
  { href: '/solutions/marketing-teams', label: 'In-house Marketing',  desc: 'Own your data without hiring an analyst.' },
  { href: '/solutions/ecommerce',       label: 'E-commerce Brands',   desc: 'Cross-market ROAS and creative performance.' },
]

const PLATFORM = [
  { href: '/product/vera-ai',                 label: 'Vera AI',                   desc: 'Ask questions in plain English. Get answers with receipts.' },
  { href: '/product/cross-channel-dashboard', label: 'Dashboards',               desc: 'Build any dashboard from your live Meta, Google and GA4 data.' },
  { href: '/product/instant-campaigns',       label: 'Instant Campaign Creation', desc: 'From URL to live campaign in minutes, with AI.' },
  { href: '/product/advanced-wizard',         label: 'Advanced Campaign Wizard',  desc: 'Full manual control over Meta + Google Ads.' },
  { href: '/product/automations',             label: 'Automations',               desc: 'Rule-based actions across all your ad accounts.' },
  { href: '/product/multi-workspace',         label: 'Multi-workspace & Slack',   desc: 'Separate data per client or market, Vera in Slack.' },
]

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000"/>
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="49" cy="15" r="4.5" fill="#1B3A8C"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function DropdownPanel({ items }: { items: typeof SOLUTIONS }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
      background: '#fff', border: `1px solid ${GREY200}`, borderRadius: 14,
      padding: '8px', minWidth: 280, zIndex: 200,
    }}>
      {items.map(item => (
        <Link key={item.href} href={item.href} style={{
          display: 'block', padding: '10px 14px', borderRadius: 8,
          textDecoration: 'none', transition: 'background 0.1s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = GREY50)}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: BLACK, marginBottom: 2 }}>{item.label}</div>
          <div style={{ fontSize: 12, color: GREY600, lineHeight: 1.4 }}>{item.desc}</div>
        </Link>
      ))}
    </div>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function NavItem({ id, label, items }: { id: string; label: string; items: typeof SOLUTIONS }) {
    const open = openMenu === id
    return (
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setOpenMenu(id)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <button
          onClick={() => setOpenMenu(open ? null : id)}
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 15, fontWeight: 400, color: open ? BLACK : GREY600,
            background: 'none', border: 'none', padding: '6px 4px',
            cursor: 'pointer', fontFamily: FONT, transition: 'color 0.15s',
          }}
        >
          {label} <ChevronDown />
        </button>
        {open && <DropdownPanel items={items} />}
      </div>
    )
  }

  return (
    <nav ref={navRef} style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${GREY200}`,
      fontFamily: FONT,
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 44px',
        height: 64, display: 'flex', alignItems: 'center',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <LogoMark />
          <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.045em', color: BLACK }}>verabix</span>
        </Link>

        {/* Center nav — desktop */}
        <div className="vbx-desktop-nav" style={{ flex: 1, justifyContent: 'center', gap: 32, alignItems: 'center' }}>
          <NavItem id="platform"  label="Platform"  items={PLATFORM}  />
          <NavItem id="solutions" label="Solutions" items={SOLUTIONS} />
          <a href="/company" style={{ fontSize: 15, fontWeight: 400, color: GREY600, textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = BLACK)}
            onMouseLeave={e => (e.currentTarget.style.color = GREY600)}
          >Customers</a>
          <a href="/company" style={{ fontSize: 15, fontWeight: 400, color: GREY600, textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = BLACK)}
            onMouseLeave={e => (e.currentTarget.style.color = GREY600)}
          >Pricing</a>
        </div>

        {/* Right CTAs — desktop */}
        <div className="vbx-desktop-nav" style={{ gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <a href="https://app.verabix.com" style={{
            fontSize: 14, color: GREY600, padding: '8px 14px', textDecoration: 'none',
            borderRadius: 999, border: `1.5px solid ${GREY200}`, transition: 'background 0.15s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = GREY50 }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >
            Log in
          </a>
          <a href="mailto:admin@verabix.com?subject=Book%20a%20demo" style={{
            fontSize: 14, fontWeight: 500, color: '#fff',
            padding: '9px 18px', borderRadius: 999,
            background: BLACK, textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            Book a demo ↗
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="vbx-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            padding: 8, cursor: 'pointer', color: BLACK,
            alignItems: 'center', justifyContent: 'center',
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen
            ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
            : <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`vbx-mobile-menu${mobileOpen ? ' open' : ''}`} style={{
        borderTop: `1px solid ${GREY200}`, padding: '16px 24px 24px',
        flexDirection: 'column', gap: 0, background: '#fff',
      }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: GREY600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '12px 0 6px' }}>Platform</div>
        {PLATFORM.map(item => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: BLACK, textDecoration: 'none' }}>
            {item.label}
          </Link>
        ))}
        <div style={{ fontSize: 11, fontWeight: 500, color: GREY600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '16px 0 6px' }}>Solutions</div>
        {SOLUTIONS.map(item => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: BLACK, textDecoration: 'none' }}>
            {item.label}
          </Link>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${GREY200}` }}>
          <a href="https://app.verabix.com" style={{ fontSize: 14, color: GREY600, padding: '10px 0', textDecoration: 'none' }}>Log in</a>
          <a href="mailto:admin@verabix.com?subject=Book%20a%20demo" style={{
            fontSize: 14, fontWeight: 500, color: '#fff', padding: '11px 16px', borderRadius: 999,
            background: BLACK, textAlign: 'center', textDecoration: 'none',
          }}>Book a demo ↗</a>
        </div>
      </div>
    </nav>
  )
}
