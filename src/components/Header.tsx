'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const BORDER = '#E3E8EF'
const PURPLE = '#534AB7'
const TEXT   = '#1A1F36'
const MUTED  = '#697386'
const TINT   = '#F6F9FC'
const FONT   = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

const SOLUTIONS = [
  { href: '/solutions/agencies',        label: 'Ad Agencies',          desc: 'One workspace per client. Unified cross-channel reporting.' },
  { href: '/solutions/marketing-teams', label: 'In-house Marketing',   desc: 'Own your data without hiring an analyst.' },
  { href: '/solutions/ecommerce',       label: 'E-commerce Brands',    desc: 'Cross-market ROAS and creative performance.' },
]

const PRODUCTS = [
  { href: '/product/vera-ai',                  label: 'Vera AI',                   desc: 'Ask questions in plain English. Get answers with receipts.' },
  { href: '/product/cross-channel-dashboard',  label: 'Cross-channel Dashboard',   desc: 'Meta, Google Ads, Google Analytics in one view.' },
  { href: '/product/instant-campaigns',        label: 'Instant Campaign Creation', desc: 'From URL to live campaign in minutes, with AI.' },
  { href: '/product/advanced-wizard',          label: 'Advanced Campaign Wizard',  desc: 'Full manual control over Meta + Google Ads.' },
  { href: '/product/automations',              label: 'Automations',               desc: 'Rule-based actions across all your ad accounts.' },
  { href: '/product/multi-workspace',          label: 'Multi-workspace & Slack',   desc: 'Separate data per client or market, Vera in Slack.' },
]

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
      background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14,
      boxShadow: '0 16px 40px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.04)',
      padding: '8px', minWidth: 280, zIndex: 200,
    }}>
      {items.map(item => (
        <Link key={item.href} href={item.href} style={{
          display: 'block', padding: '10px 14px', borderRadius: 8,
          textDecoration: 'none', transition: 'background 0.1s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = TINT)}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 2 }}>{item.label}</div>
          <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{item.desc}</div>
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
            display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 13, fontWeight: 500, color: open ? PURPLE : MUTED,
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
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: `0.5px solid ${BORDER}`,
      fontFamily: FONT,
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center',
      }}>
        {/* Logo */}
        <Link href="/" style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: TEXT, textDecoration: 'none', flexShrink: 0 }}>
          Vera<span style={{ color: PURPLE }}>bix</span>
        </Link>

        {/* Center nav — desktop */}
        <div className="vbx-desktop-nav" style={{ flex: 1, justifyContent: 'center', gap: 4, alignItems: 'center' }}>
          <NavItem id="solutions" label="Solutions" items={SOLUTIONS} />
          <NavItem id="product"   label="Product"   items={PRODUCTS}  />
          <Link href="/company" style={{
            fontSize: 13, fontWeight: 500, color: MUTED, padding: '6px 4px',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
            onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
          >
            Company
          </Link>
        </div>

        {/* Right CTAs — desktop */}
        <div className="vbx-desktop-nav" style={{ gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <a href="https://app.verabix.com" style={{ fontSize: 13, color: MUTED, padding: '6px 10px', textDecoration: 'none' }}>
            Log in
          </a>
          <a href="mailto:admin@verabix.com?subject=Book%20a%20demo" style={{
            fontSize: 13, fontWeight: 500, color: PURPLE,
            padding: '7px 14px', borderRadius: 8,
            border: `1.5px solid ${PURPLE}`, textDecoration: 'none',
          }}>
            Book demo
          </a>
          <a href="https://app.verabix.com" style={{
            fontSize: 13, fontWeight: 600,
            padding: '8px 18px', borderRadius: 8,
            background: PURPLE, color: '#fff', textDecoration: 'none',
          }}>
            Sign up free
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="vbx-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          style={{
            marginLeft: 'auto', background: 'none', border: 'none',
            padding: 8, cursor: 'pointer', color: TEXT,
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
        borderTop: `0.5px solid ${BORDER}`, padding: '16px 24px 24px',
        flexDirection: 'column', gap: 0, background: '#fff',
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '12px 0 6px' }}>Solutions</div>
        {SOLUTIONS.map(item => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: TEXT, textDecoration: 'none' }}>
            {item.label}
          </Link>
        ))}
        <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '16px 0 6px' }}>Product</div>
        {PRODUCTS.map(item => (
          <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: TEXT, textDecoration: 'none' }}>
            {item.label}
          </Link>
        ))}
        <Link href="/company" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '8px 0', fontSize: 14, color: TEXT, textDecoration: 'none', marginTop: 8, borderTop: `0.5px solid ${BORDER}`, paddingTop: 16 }}>
          Company
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20, paddingTop: 20, borderTop: `0.5px solid ${BORDER}` }}>
          <a href="https://app.verabix.com" style={{ fontSize: 14, color: MUTED, padding: '10px 0', textDecoration: 'none' }}>Log in</a>
          <a href="mailto:admin@verabix.com?subject=Book%20a%20demo" style={{ fontSize: 14, fontWeight: 500, color: PURPLE, padding: '10px 16px', borderRadius: 8, border: `1.5px solid ${PURPLE}`, textAlign: 'center', textDecoration: 'none' }}>Book demo</a>
          <a href="https://app.verabix.com" style={{ fontSize: 14, fontWeight: 600, padding: '11px 16px', borderRadius: 8, background: PURPLE, color: '#fff', textAlign: 'center', textDecoration: 'none' }}>Sign up free</a>
        </div>
      </div>
    </nav>
  )
}
