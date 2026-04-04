import Link from 'next/link'

const BG      = '#0d0f1a'
const SURFACE = '#151829'
const BORDER  = '#1e2235'
const PURPLE  = '#6C5CE7'
const TEXT    = '#f0f2ff'
const MUTED   = '#8b90a8'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '44px' }}>
      <h2 style={{
        fontSize: '18px', fontWeight: '700', color: TEXT,
        marginBottom: '14px', letterSpacing: '-0.3px',
        paddingBottom: '10px', borderBottom: `1px solid ${BORDER}`,
      }}>
        {title}
      </h2>
      <div style={{ fontSize: '15px', color: MUTED, lineHeight: '1.8' }}>
        {children}
      </div>
    </section>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: '12px' }}>{children}</p>
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: '20px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {items.map((item, i) => (
        <li key={i} style={{ listStyle: 'disc' }}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPage() {
  return (
    <div style={{ background: BG, minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      {/* Nav */}
      <nav style={{
        borderBottom: `1px solid ${BORDER}`,
        padding: '0 24px',
        background: `${BG}e6`, backdropFilter: 'blur(14px)',
        position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{
          maxWidth: '800px', margin: '0 auto',
          height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '7px', background: PURPLE,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 7 13.5 15.5l-5-5L2 17M22 7h-6M22 7v6" />
              </svg>
            </div>
            <span style={{ fontSize: '15px', fontWeight: '700', color: TEXT }}>Verabix</span>
          </Link>
          <Link href="/" style={{ fontSize: '13px', color: MUTED, textDecoration: 'none' }}>
            ← Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{
            display: 'inline-block',
            background: `${PURPLE}1a`, border: `1px solid ${PURPLE}40`,
            borderRadius: '20px', padding: '4px 14px',
            fontSize: '12px', fontWeight: '600', color: '#a29bfe',
            marginBottom: '16px',
          }}>
            Legal
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800',
            color: TEXT, letterSpacing: '-1px', margin: '0 0 14px',
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '14px', color: MUTED }}>
            Effective date: April 2026 &nbsp;·&nbsp; WebSeb, CVR: 42616354
          </p>
        </div>

        {/* Intro */}
        <div style={{
          background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '12px',
          padding: '20px 24px', marginBottom: '44px',
          fontSize: '14px', color: MUTED, lineHeight: '1.75',
        }}>
          This Privacy Policy describes how <strong style={{ color: TEXT }}>WebSeb</strong> ("we", "us", or "our") collects, uses and protects your personal data when you use Verabix. By using our service, you agree to the practices described in this policy.
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
          <P>Verabix integrates with the following third-party platforms to retrieve your advertising data. Each platform is governed by its own privacy policy:</P>
          <Ul items={[
            'Meta Ads (Facebook) — facebook.com/privacy',
            'Google Ads — policies.google.com/privacy',
            'Google Analytics — policies.google.com/privacy',
          ]} />
          <P>We access these platforms only with your explicit authorisation via OAuth. You can revoke access at any time from within Verabix or directly from each platform's settings.</P>
          <P>We also use <strong style={{ color: TEXT }}>Supabase</strong> for database hosting and authentication, and <strong style={{ color: TEXT }}>Anthropic</strong> for AI features. Data sent to these services is subject to their respective privacy policies.</P>
        </Section>

        <Section title="4. Data Retention">
          <P>We retain your data for as long as your account is active. You may request deletion of your account and all associated data at any time by contacting us at the address below.</P>
          <P>Ad performance data retrieved from third-party APIs is cached for up to 24 hours and then refreshed. We do not store raw ad account credentials — only encrypted OAuth tokens.</P>
        </Section>

        <Section title="5. Your Rights (GDPR)">
          <P>If you are located in the European Union, you have the following rights under the General Data Protection Regulation (GDPR):</P>
          <Ul items={[
            'Right of access — request a copy of the personal data we hold about you',
            'Right to rectification — request correction of inaccurate data',
            'Right to erasure — request deletion of your personal data',
            'Right to restriction — request that we limit how we process your data',
            'Right to portability — receive your data in a machine-readable format',
            'Right to object — object to processing based on legitimate interests',
          ]} />
          <P>To exercise any of these rights, please contact us at <strong style={{ color: TEXT }}>sebastianhemmersam@gmail.com</strong>. We will respond within 30 days.</P>
        </Section>

        <Section title="6. Security">
          <P>We use AES-256 encryption for all stored credentials, HTTPS for all data in transit, and follow industry-standard security practices. Access to production systems is restricted to authorised personnel only.</P>
        </Section>

        <Section title="7. Contact">
          <P>For any questions about this Privacy Policy or your personal data, please contact:</P>
          <div style={{
            background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '10px',
            padding: '18px 22px', fontSize: '14px', color: MUTED, lineHeight: '1.9',
          }}>
            <strong style={{ color: TEXT }}>WebSeb</strong><br />
            CVR: 42616354<br />
            Klostervej 23, 1. th<br />
            5000 Odense C, Denmark<br />
            <a href="mailto:sebastianhemmersam@gmail.com" style={{ color: PURPLE }}>
              sebastianhemmersam@gmail.com
            </a>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#3d4158', margin: 0 }}>
          © 2026 Verabix · <Link href="/privacy" style={{ color: '#3d4158' }}>Privacy</Link> · <Link href="/terms" style={{ color: '#3d4158' }}>Terms</Link>
        </p>
      </footer>
    </div>
  )
}
