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

export default function TermsPage() {
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
            Terms of Service
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
          These Terms of Service ("Terms") govern your use of Verabix, operated by <strong style={{ color: TEXT }}>WebSeb</strong> ("we", "us", or "our"). By accessing or using Verabix, you agree to be bound by these Terms. If you do not agree, do not use the service.
        </div>

        <Section title="1. Acceptance of Terms">
          <P>By creating an account or using any part of the Verabix service, you confirm that you are at least 18 years old, have the legal authority to enter into these Terms, and accept them fully.</P>
          <P>If you are using Verabix on behalf of a company or organisation, you represent that you have authority to bind that entity to these Terms.</P>
        </Section>

        <Section title="2. Use of Service">
          <P>Verabix grants you a limited, non-exclusive, non-transferable licence to access and use the service for your internal business purposes.</P>
          <P>You agree not to:</P>
          <Ul items={[
            'Reverse engineer, decompile, or attempt to extract the source code',
            'Use the service to store or transmit malicious code',
            'Attempt to gain unauthorised access to any part of the service or its infrastructure',
            'Resell, sublicense, or make the service available to third parties without our written consent',
            'Use the service in any way that violates applicable laws or regulations',
          ]} />
        </Section>

        <Section title="3. User Accounts">
          <P>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</P>
          <P>You must notify us immediately at <strong style={{ color: TEXT }}>sebastianhemmersam@gmail.com</strong> if you suspect any unauthorised access to your account.</P>
          <P>We reserve the right to suspend or terminate accounts that violate these Terms or that are used for fraudulent or abusive purposes.</P>
        </Section>

        <Section title="4. Data and Privacy">
          <P>Your use of Verabix is also governed by our <Link href="/privacy" style={{ color: PURPLE }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.</P>
          <P>You retain ownership of all data you connect to Verabix, including data from Meta Ads, Google Ads, and Google Analytics. By connecting these sources, you grant us a limited licence to access and process that data solely to provide the service to you.</P>
          <P>We do not sell your data to third parties.</P>
        </Section>

        <Section title="5. Intellectual Property">
          <P>All intellectual property in the Verabix platform — including the software, design, brand, and AI models — is owned by WebSeb and protected by applicable intellectual property laws.</P>
          <P>You may not copy, reproduce, or create derivative works from any part of the service without our prior written permission.</P>
        </Section>

        <Section title="6. Limitation of Liability">
          <P>To the maximum extent permitted by law, WebSeb shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, Verabix.</P>
          <P>Our total liability to you for any claim arising from these Terms or use of the service shall not exceed the amount you paid us in the 12 months preceding the claim, or €100, whichever is greater.</P>
          <P>The service is provided "as is" and "as available" without warranties of any kind, express or implied.</P>
        </Section>

        <Section title="7. Termination">
          <P>You may terminate your account at any time by contacting us. Upon termination, your right to access the service ceases immediately and we will delete your data in accordance with our Privacy Policy.</P>
          <P>We may suspend or terminate your access at any time, with or without notice, if we reasonably believe you have violated these Terms or if required by law.</P>
        </Section>

        <Section title="8. Changes to Terms">
          <P>We may update these Terms from time to time. We will notify you of material changes by email or by displaying a prominent notice in the app. Continued use of the service after changes take effect constitutes acceptance of the updated Terms.</P>
          <P>The current effective date is always shown at the top of this page.</P>
        </Section>

        <Section title="9. Governing Law">
          <P>These Terms are governed by the laws of Denmark. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Denmark.</P>
        </Section>

        <Section title="10. Contact">
          <P>For any questions about these Terms, please contact:</P>
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
