import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="footgrid">
          <div className="footcol">
            <Link className="brand" href="/">Vera<span>bix</span></Link>
            <div className="blurb">The operating system for performance marketers. Meta Ads, Google Ads and Google Analytics — unified, analysed and acted on in one place.</div>
          </div>
          <div className="footcol">
            <h5>Product</h5>
            <Link href="/product/vera-ai">Vera AI</Link>
            <Link href="/product/cross-channel-dashboard">Cross-channel Dashboard</Link>
            <Link href="/product/instant-campaigns">Instant Campaigns</Link>
            <Link href="/product/advanced-wizard">Advanced Wizard</Link>
            <Link href="/product/automations">Automations</Link>
            <Link href="/product/multi-workspace">Multi-workspace &amp; Slack</Link>
          </div>
          <div className="footcol">
            <h5>Solutions</h5>
            <Link href="/solutions/agencies">Ad Agencies</Link>
            <Link href="/solutions/marketing-teams">In-house Marketing</Link>
            <Link href="/solutions/ecommerce">E-commerce Brands</Link>
          </div>
          <div className="footcol">
            <h5>Company</h5>
            <Link href="/company">About</Link>
            <a href="mailto:admin@verabix.com">Contact</a>
            <a href="https://app.verabix.com">Log in</a>
            <Link href="/book-demo">Book a demo</Link>
          </div>
        </div>
        <div className="footbot">
          <span>© 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark</span>
          <div className="flinks">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <a href="mailto:admin@verabix.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
