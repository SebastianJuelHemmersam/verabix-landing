import Link from 'next/link'

const BG     = '#FFFFFF'
const TINT   = '#F6F9FC'
const BORDER = '#E3E8EF'
const PURPLE = '#534AB7'
const TEXT   = '#1A1F36'
const MUTED  = '#697386'
const FONT   = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 12, letterSpacing: '-0.2px', paddingBottom: 10, borderBottom: `0.5px solid ${BORDER}`, fontFamily: FONT }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, fontFamily: FONT }}>
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 10 }}>{children}</p>
}

function Ul({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ paddingLeft: 20, marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => <li key={i} style={{ listStyle: 'disc' }}>{item}</li>)}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <div style={{ background: BG, minHeight: '100vh', fontFamily: FONT }}>
      {/* Nav */}
      <nav style={{ borderBottom: `0.5px solid ${BORDER}`, padding: '0 40px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: TEXT, textDecoration: 'none' }}>
            Vera<span style={{ color: PURPLE }}>bix</span>
          </Link>
          <Link href="/" style={{ fontSize: 13, color: MUTED, textDecoration: 'none' }}>← Back to home</Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px 80px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 500, color: PURPLE, background: '#EEEDFE', borderRadius: 20, padding: '4px 14px', marginBottom: 16, letterSpacing: '0.2px' }}>
            Legal
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.8px', margin: '0 0 10px', color: TEXT }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: MUTED }}>Effective date: April 2026 · Verabix ApS, CVR: 46483839</p>
        </div>

        <div style={{ background: TINT, border: `0.5px solid ${BORDER}`, borderRadius: 12, padding: '18px 22px', marginBottom: 40, fontSize: 14, color: MUTED, lineHeight: 1.75 }}>
          This Privacy Policy describes how <strong style={{ color: TEXT }}>Verabix ApS</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses and protects your personal data when you use Verabix. By using our service, you agree to the practices described in this policy.
        </div>

        <Section title="1. Data We Collect">
          <P>We collect the following categories of personal data:</P>
          <Ul items={[
            'Account information: your name and email address when you sign up',
            'Ad platform data: spend, impressions, clicks, conversions and revenue pulled from connected ad accounts via official APIs',
            'Usage data: pages visited, features used, and session duration to improve the product',
            'Cookies and local storage: authentication tokens and user preferences',
          ]} />
          <P>We do not collect payment card details directly — payments are processed by third-party providers.</P>
        </Section>

        <Section title="2. How We Use Your Data">
          <P>Your data is used solely to provide and improve the Verabix service:</P>
          <Ul items={[
            'Authenticate your account and maintain your session',
            'Fetch and display your ad performance data in the dashboard',
            'Generate AI-powered insights via the Vera agent',
            'Send transactional emails (e.g. account notifications)',
            'Diagnose bugs and improve product performance',
          ]} />
          <P>We do not sell your personal data to third parties and we do not use your data for advertising purposes.</P>
        </Section>

        <Section title="3. Third-Party Services">
          <P>Verabix integrates with the following third-party platforms to retrieve your advertising data:</P>
          <Ul items={[
            <span key="meta">Meta Ads (Facebook) — <a href="https://www.facebook.com/privacy/policy/" style={{ color: PURPLE }}>facebook.com/privacy</a></span>,
            <span key="google">Google Ads — <a href="https://policies.google.com/privacy" style={{ color: PURPLE }}>policies.google.com/privacy</a></span>,
            <span key="ga">Google Analytics — <a href="https://policies.google.com/privacy" style={{ color: PURPLE }}>policies.google.com/privacy</a></span>,
          ]} />
          <P>We access these platforms only with your explicit authorisation via OAuth. You can revoke access at any time from within Verabix or directly from each platform&apos;s settings.</P>
          <P>We also use <strong style={{ color: TEXT }}>Supabase</strong> for database hosting and authentication, and <strong style={{ color: TEXT }}>Anthropic</strong> for AI features.</P>
        </Section>

        <Section title="4. Data Retention">
          <P>We retain your data for as long as your account is active. You may request deletion of your account and all associated data at any time by contacting us at the address below.</P>
          <P>Ad performance data retrieved from third-party APIs is cached for up to 24 hours and then refreshed. We do not store raw ad account credentials — only encrypted OAuth tokens.</P>
        </Section>

        <Section title="5. Your Rights (GDPR)">
          <P>If you are located in the European Union, you have the following rights under the GDPR:</P>
          <Ul items={[
            'Right of access — request a copy of the personal data we hold about you',
            'Right to rectification — request correction of inaccurate data',
            'Right to erasure — request deletion of your personal data',
            'Right to restriction — request that we limit how we process your data',
            'Right to portability — receive your data in a machine-readable format',
            'Right to object — object to processing based on legitimate interests',
          ]} />
          <P>To exercise any of these rights, please contact us at <strong style={{ color: TEXT }}>admin@verabix.com</strong>. We will respond within 30 days.</P>
        </Section>

        <Section title="6. Security">
          <P>We use AES-256 encryption for all stored credentials, HTTPS for all data in transit, and follow industry-standard security practices.</P>
        </Section>

        <Section title="7. Google API Services">
          <P>
            Verabix uses the Google Ads API to retrieve campaign performance data on behalf of authenticated users.
            Our use and transfer of information received from Google APIs adheres to the{' '}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </P>
          <P>Specifically:</P>
          <Ul items={[
            'We only request access to Google Ads data that is necessary to provide the Verabix dashboard service.',
            'We do not use Google Ads data for any purpose other than displaying it to the authenticated account owner.',
            'We do not share, sell, or transfer Google Ads data to third parties.',
            'We do not use Google Ads data for advertising or remarketing purposes.',
            <span key="revoke">Users can revoke Google Ads access at any time from within Verabix or from their Google Account settings at{' '}
              <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>myaccount.google.com</a>.
            </span>,
          ]} />
        </Section>

        <Section title="8. Contact">
          <P>For any questions about this Privacy Policy or your personal data, please contact:</P>
          <div style={{ background: TINT, border: `0.5px solid ${BORDER}`, borderRadius: 10, padding: '18px 22px', fontSize: 14, color: MUTED, lineHeight: 1.9 }}>
            <strong style={{ color: TEXT }}>Verabix ApS</strong><br />
            CVR: 46483839<br />
            Klostervej 23, 1. th<br />
            5000 Odense C, Denmark<br />
            <a href="mailto:admin@verabix.com" style={{ color: PURPLE }}>admin@verabix.com</a>
          </div>
        </Section>
      </div>

      <footer style={{ borderTop: `0.5px solid ${BORDER}`, padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: MUTED, maxWidth: 1240, margin: '0 auto' }}>
        <span>© 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link href="/terms" style={{ color: MUTED }}>Terms of Service</Link>
          <Link href="/" style={{ color: MUTED }}>Home</Link>
        </div>
      </footer>
    </div>
  )
}
