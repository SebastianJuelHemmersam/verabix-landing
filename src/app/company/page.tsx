import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Company — About Verabix',
  description: 'Verabix is building the operating system for performance marketers — unified cross-channel analytics, AI-powered insights, and campaign management in one place.',
}

const PURPLE    = '#534AB7'
const PURPLE_BG = '#EEEDFE'
const TEXT      = '#1A1F36'
const MUTED     = '#697386'
const BORDER    = '#E3E8EF'
const SURF      = '#F0F2F7'
const TINT      = '#F6F9FC'
const FONT      = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

const VALUES = [
  {
    title: 'Transparency over black boxes',
    body: 'Vera cites every number she references. You should always be able to verify what an AI tells you about your ad data.',
  },
  {
    title: 'Speed for marketers, not engineers',
    body: 'Every feature is designed around the daily workflow of a performance marketer — not a data analyst or a developer.',
  },
  {
    title: 'Cross-channel by default',
    body: 'Meta and Google Ads are not separate products. We build every feature to work across both platforms at once.',
  },
  {
    title: 'Respect for the data',
    body: 'We never mix client data between workspaces. Every workspace is fully isolated — always.',
  },
]

export default function CompanyPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '80px 40px 64px', width: '100%', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Company
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.13, margin: '0 0 20px', color: TEXT }}>
          The operating system for performance marketers.
        </h1>
        <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.7, margin: '0 auto', maxWidth: 560 }}>
          Verabix connects Meta Ads, Google Ads, and Google Analytics into one unified platform — with AI-powered analysis, cross-channel campaign management, and a marketing analyst named Vera who already read all your data.
        </p>
      </section>

      {/* Mission */}
      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>Mission</div>
          <p style={{ fontSize: 22, fontWeight: 600, color: TEXT, lineHeight: 1.5, margin: '0 0 20px', letterSpacing: '-0.3px' }}>
            Performance marketing has too many tabs, too many exports, and too much time spent on questions a computer should answer instantly.
          </p>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, margin: 0 }}>
            We&apos;re building Verabix because performance marketers spend hours every week answering questions that their data already knows the answer to — they just can&apos;t get to it fast enough. Our goal is to close that gap completely: from raw ad data to clear decision in under 30 seconds.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 32 }}>What we believe</div>
          <div className="vbx-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ padding: '22px 24px', background: SURF, borderRadius: 12, border: `0.5px solid ${BORDER}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.65 }}>{v.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: PURPLE, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 20 }}>Get in touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.4px' }}>General enquiries</div>
              <a href="mailto:admin@verabix.com" style={{ fontSize: 15, color: PURPLE, textDecoration: 'none', fontWeight: 500 }}>admin@verabix.com</a>
            </div>
            <div style={{ width: '100%', height: '0.5px', background: BORDER }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.4px' }}>Book a demo</div>
              <a href="mailto:admin@verabix.com?subject=Book%20a%20demo" style={{ fontSize: 15, color: PURPLE, textDecoration: 'none', fontWeight: 500 }}>Request a walkthrough →</a>
            </div>
            <div style={{ width: '100%', height: '0.5px', background: BORDER }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.4px' }}>Try the platform</div>
              <a href="https://app.verabix.com" style={{ fontSize: 15, color: PURPLE, textDecoration: 'none', fontWeight: 500 }}>app.verabix.com →</a>
            </div>
          </div>
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  )
}
