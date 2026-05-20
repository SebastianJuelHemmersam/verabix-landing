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

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 20, marginBottom: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map((item, i) => <li key={i} style={{ listStyle: 'disc' }}>{item}</li>)}
    </ul>
  )
}

export default function TermsPage() {
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
          <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.8px', margin: '0 0 10px', color: TEXT }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: MUTED }}>Effective date: April 2026 · Verabix ApS, CVR: 46483839</p>
        </div>

        <div style={{ background: TINT, border: `0.5px solid ${BORDER}`, borderRadius: 12, padding: '18px 22px', marginBottom: 40, fontSize: 14, color: MUTED, lineHeight: 1.75 }}>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Verabix, operated by <strong style={{ color: TEXT }}>Verabix ApS</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using Verabix, you agree to be bound by these Terms.
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
          <P>You must notify us immediately at <strong style={{ color: TEXT }}>admin@verabix.com</strong> if you suspect any unauthorised access to your account.</P>
          <P>We reserve the right to suspend or terminate accounts that violate these Terms or that are used for fraudulent or abusive purposes.</P>
        </Section>

        <Section title="4. Data and Privacy">
          <P>Your use of Verabix is also governed by our <Link href="/privacy" style={{ color: PURPLE }}>Privacy Policy</Link>, which is incorporated into these Terms by reference.</P>
          <P>You retain ownership of all data you connect to Verabix. By connecting your ad accounts, you grant us a limited licence to access and process that data solely to provide the service to you.</P>
          <P>We do not sell your data to third parties.</P>
        </Section>

        <Section title="5. Intellectual Property">
          <P>All intellectual property in the Verabix platform — including the software, design, brand, and AI models — is owned by Verabix ApS and protected by applicable intellectual property laws.</P>
          <P>You may not copy, reproduce, or create derivative works from any part of the service without our prior written permission.</P>
        </Section>

        <Section title="6. Limitation of Liability">
          <P>To the maximum extent permitted by law, Verabix ApS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, Verabix.</P>
          <P>Our total liability to you for any claim arising from these Terms or use of the service shall not exceed the amount you paid us in the 12 months preceding the claim, or €100, whichever is greater.</P>
          <P>The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind.</P>
        </Section>

        <Section title="7. Termination">
          <P>You may terminate your account at any time by contacting us. Upon termination, your right to access the service ceases immediately and we will delete your data in accordance with our Privacy Policy.</P>
          <P>We may suspend or terminate your access at any time, with or without notice, if we reasonably believe you have violated these Terms or if required by law.</P>
        </Section>

        <Section title="8. Changes to Terms">
          <P>We may update these Terms from time to time. We will notify you of material changes by email or by displaying a prominent notice in the app. Continued use of the service after changes take effect constitutes acceptance of the updated Terms.</P>
        </Section>

        <Section title="9. Governing Law">
          <P>These Terms are governed by the laws of Denmark. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Denmark.</P>
        </Section>

        <Section title="10. Contact">
          <P>For any questions about these Terms, please contact:</P>
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
          <Link href="/privacy" style={{ color: MUTED }}>Privacy Policy</Link>
          <Link href="/" style={{ color: MUTED }}>Home</Link>
        </div>
      </footer>
    </div>
  )
}
