import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Vera AI — The marketing analyst who already read all your data',
  description: 'Ask questions about your Meta Ads, Google Ads, and Google Analytics in plain English. Vera answers with the receipts, in-app and in Slack.',
}

const PURPLE    = '#534AB7'
const PURPLE_BG = '#EEEDFE'
const TEXT      = '#1A1F36'
const MUTED     = '#697386'
const BORDER    = '#E3E8EF'
const SURF      = '#F0F2F7'
const TINT      = '#F6F9FC'
const FONT      = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'

const BULLETS = [
  'Cross-channel reasoning — Vera sees Meta, Google Ads and GA4 simultaneously',
  'Cites exact numbers so you can double-check every claim',
  'Available in-app and in Slack — tag @Vera from any channel',
  'Builds and pins charts to your dashboard on request',
  'Proactive alerts when spend spikes or ROAS drops unexpectedly',
  'Remembers your campaigns, brand names and goals across conversations',
]

function ChatPreview() {
  const Bubble = ({ vera, children }: { vera?: boolean; children: React.ReactNode }) => (
    <div style={{ display: 'flex', flexDirection: vera ? 'row' : 'row-reverse', gap: 6, alignItems: 'flex-start' }}>
      {vera
        ? <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'linear-gradient(135deg,#534AB7,#7C3AED)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>V</div>
        : <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#e8e8e8', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>AM</div>
      }
      <div style={{ fontSize: 11, lineHeight: 1.55, padding: '7px 10px', borderRadius: 10, maxWidth: 240, background: vera ? SURF : PURPLE, color: vera ? TEXT : '#fff', borderBottomLeftRadius: vera ? 3 : 10, borderBottomRightRadius: vera ? 10 : 3 }}>
        {children}
      </div>
    </div>
  )
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 18, boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)', fontFamily: FONT }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg,#534AB7,#7C3AED)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, flexShrink: 0 }}>V</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1 }}>Vera</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ fontSize: 9, color: '#3B6D11' }}>Live · Meta · Google · GA4</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Bubble>Which campaign should I scale right now?</Bubble>
        <Bubble vera>
          Brand Search · Generic has the best efficiency: <b>6.8× ROAS</b> on €7.1k spend, up <b>+0.3</b> WoW. It&apos;s well below your impression share cap. I&apos;d suggest testing a +20% budget increase there before touching any Meta sets.
        </Bubble>
        <Bubble>What&apos;s holding back Meta?</Bubble>
        <Bubble vera>
          <span style={{ display: 'flex', gap: 3 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#aaa' }} />)}
          </span>
        </Bubble>
      </div>
    </div>
  )
}

export default function VeraAIPage() {
  return (
    <div style={{ background: '#fff', fontFamily: FONT, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <section style={{ maxWidth: 1040, margin: '0 auto', padding: '72px 40px 64px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: PURPLE, background: PURPLE_BG, borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 20 }}>
          Product · Vera AI
        </div>
        <div className="vbx-subhero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
              The marketing analyst who already read all your data.
            </h1>
            <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>
              Vera connects to every source you&apos;ve linked — Meta Ads, Google Ads, Google Analytics — and answers in plain English. No dashboards to build, no SQL to write. Just ask, and she cites the numbers.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
                Try Vera free
              </a>
              <a href="mailto:admin@verabix.com?subject=Demo+request" style={{ display: 'inline-block', fontSize: 14, fontWeight: 500, padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none' }}>
                See a demo →
              </a>
            </div>
          </div>
          <ChatPreview />
        </div>
      </section>

      <section style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 32px' }}>
            Not a chatbot. A reasoning layer across all your ad data.
          </h2>
          <div className="vbx-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {BULLETS.map(b => (
              <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 18px', background: '#fff', borderRadius: 10, border: `0.5px solid ${BORDER}` }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="8" fill={PURPLE_BG}/><path d="M4.5 8L7 10.5L11.5 5.5" stroke={PURPLE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontSize: 13, color: TEXT, lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', color: TEXT, margin: '0 0 14px' }}>Ask Vera your first question today.</h2>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.7, margin: '0 0 28px' }}>Connect your ad accounts and get answers in minutes.</p>
          <a href="https://app.verabix.com" style={{ display: 'inline-block', fontSize: 15, fontWeight: 600, padding: '13px 32px', borderRadius: 10, background: PURPLE, color: '#fff', textDecoration: 'none' }}>
            Start free →
          </a>
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </div>
  )
}
