import Link from 'next/link'

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000"/>
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="49" cy="15" r="4.5" fill="#1B3A8C"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fgrid">
          <div className="fb">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <LogoMark />
              <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.045em', color: '#000' }}>verabix</span>
            </Link>
            <p>The operating system for performance marketers. Meta Ads, Google Ads and GA4 — unified, analysed and acted on in one place.</p>
          </div>
          <div>
            <span className="mono">Platform</span>
            <Link href="/product/vera-ai">Vera AI</Link>
            <Link href="/product/cross-channel-dashboard">Cross-channel Dashboard</Link>
            <Link href="/product/instant-campaigns">Instant Campaigns</Link>
            <Link href="/product/advanced-wizard">Advanced Wizard</Link>
            <Link href="/product/automations">Automations</Link>
            <Link href="/product/multi-workspace">Multi-workspace &amp; Slack</Link>
          </div>
          <div>
            <span className="mono">Solutions</span>
            <Link href="/solutions/agencies">Ad Agencies</Link>
            <Link href="/solutions/marketing-teams">In-house Marketing</Link>
            <Link href="/solutions/ecommerce">E-commerce Brands</Link>
          </div>
          <div>
            <span className="mono">Company</span>
            <Link href="/company">About</Link>
            <a href="mailto:admin@verabix.com">Contact</a>
            <a href="https://app.verabix.com">Log in</a>
            <a href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo</a>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a href="mailto:admin@verabix.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
