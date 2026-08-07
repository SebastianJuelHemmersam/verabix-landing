import Link from 'next/link'

const BORDER = '#E3E8EF'
const MUTED  = '#697386'
const FONT   = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

export default function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${BORDER}`, padding: '24px 40px', fontFamily: FONT }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 12, color: MUTED }}>
        <span>© 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link href="/privacy" style={{ color: MUTED }}>Privacy Policy</Link>
          <Link href="/terms"   style={{ color: MUTED }}>Terms of Service</Link>
          <a href="mailto:admin@verabix.com" style={{ color: MUTED }}>Contact</a>
        </div>
      </div>
    </footer>
  )
}
