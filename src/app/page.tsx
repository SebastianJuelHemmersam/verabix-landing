'use client'

import { useState } from 'react'

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG     = '#FFFFFF'
const TINT   = '#F6F9FC'
const SURF   = '#F0F2F7'
const BORDER = '#E3E8EF'
const PURPLE = '#534AB7'
const TEXT   = '#1A1F36'
const MUTED  = '#697386'
const FONT   = 'var(--font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)'
const MONO   = 'var(--font-mono, "JetBrains Mono", monospace)'

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: `0.5px solid ${BORDER}`,
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '0 40px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: FONT,
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: TEXT }}>
          Vera<span style={{ color: PURPLE }}>bix</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['#features', 'Features'], ['#integrations', 'Integrations'], ['/privacy', 'Privacy']].map(([href, label]) => (
            <a key={href} href={href} style={{ fontSize: 13, color: MUTED, textDecoration: 'none' }}>{label}</a>
          ))}
          <a href="#waitlist" style={{
            fontSize: 13, fontWeight: 500, padding: '7px 18px',
            borderRadius: 8, background: PURPLE, color: '#fff', textDecoration: 'none',
          }}>Join waitlist</a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ maxWidth: 720, margin: '0 auto', padding: '80px 40px 64px', textAlign: 'center', fontFamily: FONT }}>
      <div style={{
        display: 'inline-block', fontSize: 12, fontWeight: 500, color: PURPLE,
        background: '#EEEDFE', borderRadius: 20, padding: '4px 14px',
        marginBottom: 24, letterSpacing: '0.2px',
      }}>
        Google Ads · Meta Ads · Analytics
      </div>
      <h1 style={{ fontSize: 46, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, margin: '0 0 20px', color: TEXT }}>
        One dashboard for all<br />your ad performance
      </h1>
      <p style={{ fontSize: 17, color: MUTED, lineHeight: 1.7, margin: '0 auto 36px', maxWidth: 540 }}>
        Verabix connects to Google Ads, Meta Ads, and Google Analytics via their official APIs to give you unified campaign insights, AI-powered recommendations, and automated alerts — all in one place.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#waitlist" style={{
          display: 'inline-block', fontSize: 15, fontWeight: 600,
          padding: '13px 32px', borderRadius: 10, background: PURPLE,
          color: '#fff', textDecoration: 'none', letterSpacing: '-0.2px',
        }}>Join the waitlist</a>
        <a href="#features" style={{
          display: 'inline-block', fontSize: 15, fontWeight: 500,
          padding: '13px 24px', borderRadius: 10,
          border: `1.5px solid ${BORDER}`, color: MUTED, textDecoration: 'none',
        }}>See how it works →</a>
      </div>
      <div style={{ marginTop: 18, fontSize: 12, color: '#9CA3AF' }}>
        Free to join · no credit card required
      </div>
    </section>
  )
}

// ─── Shared preview chrome ────────────────────────────────────────────────────
function PreviewCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: BG, borderRadius: 14, padding: 18,
      boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)',
      fontFamily: FONT, ...style,
    }}>{children}</div>
  )
}
function MiniEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>
      {children}
    </div>
  )
}

// ─── Feature preview mockups ──────────────────────────────────────────────────
function OverviewPreview() {
  const kpis = [
    { l: 'Spend', v: '$48.2k', d: '+12%', up: true },
    { l: 'ROAS',  v: '3.42×',  d: '+0.18', up: true },
    { l: 'Conv.', v: '1,247',  d: '+9%', up: true },
    { l: 'CPA',   v: '$38.65', d: '-3%', up: false },
  ]
  const sources = [
    { l: 'google / cpc', pct: 100 },
    { l: 'meta / paid',  pct: 66 },
    { l: 'organic',      pct: 44 },
    { l: '(direct)',     pct: 34 },
  ]
  return (
    <PreviewCard>
      <MiniEyebrow>Performance · last 30d</MiniEyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6, marginBottom: 14 }}>
        {kpis.map(k => (
          <div key={k.l} style={{ background: SURF, borderRadius: 8, padding: '8px 10px' }}>
            <div style={{ fontSize: 9, color: MUTED }}>{k.l}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, letterSpacing: '-0.4px', marginTop: 2 }}>{k.v}</div>
            <div style={{ fontSize: 9, color: k.up ? '#0E7C54' : '#C0123C', marginTop: 1 }}>{k.d}</div>
          </div>
        ))}
      </div>
      <MiniEyebrow>Source breakdown</MiniEyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {sources.map(s => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontSize: 10, color: TEXT, width: 70 }}>{s.l}</div>
            <div style={{ flex: 1, height: 4, background: SURF, borderRadius: 2 }}>
              <div style={{ width: `${s.pct}%`, height: '100%', background: PURPLE, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    </PreviewCard>
  )
}

function DashboardPreview() {
  return (
    <PreviewCard>
      <MiniEyebrow>Ask Vera to build it</MiniEyebrow>
      <div style={{ background: SURF, borderRadius: 8, padding: '8px 10px', fontSize: 11, color: TEXT, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <VeraAvatar size={18} />
        <span>&ldquo;Show me Meta ROAS by creative this month&rdquo;</span>
      </div>
      <div style={{ background: TINT, borderRadius: 8, padding: 12 }}>
        <div style={{ fontSize: 10, color: MUTED, marginBottom: 8 }}>Meta · ROAS by creative</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 70 }}>
          {[64, 42, 88, 30, 58, 26, 72].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 2 ? PURPLE : '#AFA9EC', borderRadius: 2 }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 9, color: MUTED }}>
          {['HR-01','HR-02','HR-03','HR-04','HR-05','HR-06','HR-07'].map(l => <span key={l}>{l}</span>)}
        </div>
      </div>
      <div style={{ marginTop: 12, fontSize: 11, color: MUTED }}>✨ Saved to your dashboards · pinned to top</div>
    </PreviewCard>
  )
}

function VeraAvatar({ size = 26 }: { size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', flexShrink: 0,
      background: 'linear-gradient(135deg,#534AB7,#7C3AED)',
      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.42, fontWeight: 700,
    }}>V</div>
  )
}

function VeraChatPreview() {
  const Bubble = ({ vera, children }: { vera?: boolean; children: React.ReactNode }) => (
    <div style={{ display: 'flex', flexDirection: vera ? 'row' : 'row-reverse', gap: 6, alignItems: 'flex-start' }}>
      {vera
        ? <VeraAvatar size={22} />
        : <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#e8e8e8', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, flexShrink: 0 }}>AM</div>
      }
      <div style={{
        fontSize: 11, lineHeight: 1.55, padding: '7px 10px', borderRadius: 10, maxWidth: 240,
        background: vera ? SURF : PURPLE, color: vera ? TEXT : '#fff',
        borderBottomLeftRadius: vera ? 3 : 10, borderBottomRightRadius: vera ? 10 : 3,
      }}>{children}</div>
    </div>
  )
  return (
    <PreviewCard>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <VeraAvatar size={26} />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: TEXT, lineHeight: 1 }}>Vera</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
            <span style={{ fontSize: 9, color: '#3B6D11' }}>Live · Meta · Google · GA4</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Bubble>Why is Meta CPA up this week?</Bubble>
        <Bubble vera>Meta CPA is up <b>+22% WoW</b>, driven by Holiday Retarget. Want me to break it down by creative?</Bubble>
        <Bubble>Yes please.</Bubble>
        <Bubble vera>
          <span style={{ display: 'flex', gap: 3 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#aaa' }} />)}
          </span>
        </Bubble>
      </div>
    </PreviewCard>
  )
}

function AutomatePreview() {
  const Row = ({ k, v, accent }: { k: string; v: string; accent?: boolean }) => (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, fontSize: 12, color: TEXT }}>
      <span style={{ fontFamily: MONO, color: MUTED, fontSize: 11, minWidth: 38 }}>{k}</span>
      <span style={{ background: accent ? '#EEEDFE' : SURF, color: accent ? PURPLE : TEXT, padding: '2px 7px', borderRadius: 5, fontWeight: 500 }}>{v}</span>
    </div>
  )
  return (
    <PreviewCard>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: '#534AB714', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚡</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>Pause low-ROAS campaigns</div>
          <div style={{ fontSize: 11, color: MUTED }}>Runs every 6h · across Meta + Google Ads</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <Row k="IF" v="ROAS" /><Row k="" v="< 1.0" accent /><Row k="FOR" v="2+ days" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Row k="THEN" v="pause campaign" accent />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Row k="AND" v="notify #marketing-ops in Slack" />
        </div>
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, padding: '2px 7px', borderRadius: 999, background: '#EAF3DE', color: '#3B6D11', fontWeight: 500 }}>Active</span>
        <span style={{ fontSize: 11, color: MUTED }}>Last run: 2h ago — paused 1 campaign</span>
      </div>
    </PreviewCard>
  )
}

function CampaignsPreview() {
  const rows = [
    { n: 'Holiday Retarget — Q4',  ch: 'M', chBg: '#EEEDFE', chFg: PURPLE, st: 'Active', spend: '$8.4k', roas: '4.1×' },
    { n: 'Brand Search · Generic', ch: 'G', chBg: '#EFF6FF', chFg: '#2563EB', st: 'Active', spend: '$7.1k', roas: '6.8×' },
    { n: 'Lookalike 1%',           ch: 'M', chBg: '#EEEDFE', chFg: PURPLE, st: 'Active', spend: '$4.9k', roas: '2.7×' },
    { n: 'Performance Max',        ch: 'G', chBg: '#EFF6FF', chFg: '#2563EB', st: 'Active', spend: '$4.3k', roas: '3.2×' },
    { n: 'Cart Abandoners',        ch: 'M', chBg: '#EEEDFE', chFg: PURPLE, st: 'Paused', spend: '$1.2k', roas: '1.4×' },
  ]
  return (
    <PreviewCard style={{ padding: 0 }}>
      <div style={{ padding: '14px 18px', borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>All campaigns</div>
          <div style={{ fontSize: 11, color: MUTED }}>Meta + Google · 14 active</div>
        </div>
        <button style={{ fontSize: 11, fontWeight: 500, background: PURPLE, color: '#fff', border: 'none', padding: '6px 12px', borderRadius: 8 }}>+ New campaign</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '24px 1fr 60px 50px 50px', padding: '8px 18px', background: TINT, fontSize: 10, color: MUTED, textTransform: 'uppercase', letterSpacing: '.4px', fontWeight: 600 }}>
        <div /><div>Campaign</div><div>Status</div><div style={{ textAlign: 'right' }}>Spend</div><div style={{ textAlign: 'right' }}>ROAS</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr 60px 50px 50px', padding: '10px 18px', alignItems: 'center', borderTop: i > 0 ? `1px solid ${SURF}` : 'none' }}>
          <div style={{ width: 18, height: 18, borderRadius: 4, background: r.chBg, color: r.chFg, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.ch}</div>
          <div style={{ fontSize: 11, color: TEXT, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.n}</div>
          <div><span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: r.st === 'Active' ? '#EAF3DE' : SURF, color: r.st === 'Active' ? '#3B6D11' : MUTED, fontWeight: 500 }}>{r.st}</span></div>
          <div style={{ fontSize: 11, fontWeight: 600, color: TEXT, textAlign: 'right' }}>{r.spend}</div>
          <div style={{ fontSize: 11, fontWeight: 600, color: TEXT, textAlign: 'right' }}>{r.roas}</div>
        </div>
      ))}
    </PreviewCard>
  )
}

function AttributionPreview() {
  const rows = [
    { name: 'Meta Ads',         platform: 1180, ga4: 720 },
    { name: 'Google Ads',       platform: 940,  ga4: 1080 },
    { name: 'Organic / Direct', platform: 0,    ga4: 540 },
  ]
  const max = 1180
  return (
    <PreviewCard>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <VeraAvatar size={22} />
        <span style={{ fontSize: 12, fontWeight: 600, color: TEXT }}>Attribution discrepancy</span>
      </div>
      <p style={{ fontSize: 11, color: MUTED, lineHeight: 1.55, margin: '0 0 14px' }}>
        Meta reports <b style={{ color: TEXT }}>+39%</b> more conversions than GA4 sees. Most likely cause: view-through windows.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map(r => (
          <div key={r.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 4 }}>
              <span style={{ color: TEXT, fontWeight: 500 }}>{r.name}</span>
              <span style={{ color: MUTED, fontFamily: MONO }}>{r.platform} / {r.ga4}</span>
            </div>
            <div style={{ display: 'flex', gap: 3, height: 16 }}>
              <div style={{ flex: 1, background: SURF, borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${(r.platform / max) * 100}%`, height: '100%', background: PURPLE }} />
              </div>
              <div style={{ flex: 1, background: SURF, borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${(r.ga4 / max) * 100}%`, height: '100%', background: '#F9AB00' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 12, fontSize: 10, color: MUTED }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, background: PURPLE, borderRadius: 2 }} />Platform-reported</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, background: '#F9AB00', borderRadius: 2 }} />GA4 observed</span>
      </div>
    </PreviewCard>
  )
}

// ─── Bullet tick ──────────────────────────────────────────────────────────────
function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
      <circle cx="6" cy="6" r="6" fill="#EEEDFE"/>
      <path d="M3.5 6L5 7.5L8.5 4" stroke={PURPLE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Feature row ─────────────────────────────────────────────────────────────
interface FeatureRowProps {
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  preview: React.ReactNode
  side?: 'left' | 'right'
  tint?: boolean
}

function FeatureRow({ eyebrow, title, body, bullets, preview, side = 'left', tint }: FeatureRowProps) {
  const copy = (
    <div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontSize: 11, fontWeight: 600, color: PURPLE,
        background: '#EEEDFE', borderRadius: 999, padding: '4px 12px',
        letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 16,
      }}>
        {eyebrow}
      </div>
      <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.6px', lineHeight: 1.2, margin: '0 0 16px', color: TEXT }}>{title}</h2>
      <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, margin: '0 0 22px' }}>{body}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {bullets.map(line => (
          <div key={line} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, color: TEXT }}>
            <Tick /><span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <section style={{ background: tint ? TINT : BG, borderTop: tint ? `0.5px solid ${BORDER}` : undefined, borderBottom: tint ? `0.5px solid ${BORDER}` : undefined, padding: '80px 40px', fontFamily: FONT }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        {side === 'left' ? <>{copy}<div>{preview}</div></> : <><div>{preview}</div>{copy}</>}
      </div>
    </section>
  )
}

// ─── Vera in Slack ────────────────────────────────────────────────────────────
function SlackChip({ label, value, change, up }: { label: string; value: string; change: string; up?: boolean }) {
  return (
    <div style={{ background: TINT, borderRadius: 8, padding: '6px 10px', border: `0.5px solid ${BORDER}`, fontSize: 11, display: 'flex', alignItems: 'baseline', gap: 8 }}>
      <span style={{ color: MUTED }}>{label}</span>
      <span style={{ fontWeight: 600, color: TEXT }}>{value}</span>
      <span style={{ color: up ? '#C0123C' : '#0E7C54', fontWeight: 500 }}>{change}</span>
    </div>
  )
}

function SlackMessage({ avatar, avatarBg, avatarColor = '#1D1C1D', name, badge, time, body }: {
  avatar: string; avatarBg: string; avatarColor?: string
  name: string; badge?: string; time: string; body: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', gap: 10, padding: '12px 16px', alignItems: 'flex-start' }}>
      <div style={{ width: 32, height: 32, borderRadius: 6, flexShrink: 0, background: avatarBg, color: avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>{avatar}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#1D1C1D' }}>{name}</span>
          {badge && <span style={{ fontSize: 9, fontWeight: 700, background: '#E8E8E8', color: '#616061', padding: '1px 4px', borderRadius: 3, letterSpacing: '0.3px' }}>{badge}</span>}
          <span style={{ fontSize: 11, color: '#9CA3AF' }}>{time}</span>
        </div>
        <div style={{ fontSize: 13, color: '#1D1C1D', lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  )
}

function VeraSlackRow() {
  return (
    <section style={{ padding: '80px 40px', background: BG, fontFamily: FONT }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        {/* Copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, color: PURPLE, background: '#EEEDFE', borderRadius: 999, padding: '4px 12px', letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 16 }}>
            Vera in Slack
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.7px', lineHeight: 1.2, margin: '0 0 18px', color: TEXT }}>
            Tag Vera in Slack like you would a colleague.
          </h2>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, margin: '0 0 24px' }}>
            Ask &quot;@Vera why is Meta CPA up this week?&quot; — Vera reads across Meta, Google Ads and GA4, finds the drift, and replies in-thread with the receipts. No tab-switching, no dashboards to share.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              'Ask in plain English — Vera writes the SQL',
              'Alerts when spend spikes or ROAS slips',
              'Daily 9am brief, configurable by channel',
            ].map(line => (
              <div key={line} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, color: TEXT }}>
                <Tick />{line}
              </div>
            ))}
          </div>
        </div>
        {/* Slack thread mock */}
        <div style={{ background: BG, borderRadius: 14, overflow: 'hidden', boxShadow: '0 10px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(0,0,0,.06)' }}>
          <div style={{ background: '#F8F8F8', padding: '10px 16px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#1D1C1D', fontWeight: 500 }}>
            <span style={{ color: '#616061' }}>#</span> marketing-ops
            <span style={{ marginLeft: 'auto', fontSize: 11, color: '#9CA3AF' }}>Slack · today</span>
          </div>
          <SlackMessage avatar="AM" avatarBg="#FFC107" name="Anna Møller" time="9:42 AM"
            body={<span><span style={{ background: '#EEEDFE', color: PURPLE, padding: '0 4px', borderRadius: 4, fontWeight: 500 }}>@Vera</span> why is Meta CPA up this week?</span>} />
          <SlackMessage avatar="V" avatarBg="linear-gradient(135deg,#534AB7,#7C3AED)" avatarColor="#fff" name="Vera" badge="APP" time="9:42 AM"
            body={
              <div>
                <div>Meta CPA is up <b style={{ color: '#C0123C' }}>+22%</b> WoW, driven mostly by the <b>Holiday Retarget</b> set.</div>
                <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <SlackChip label="Holiday Retarget" value="$2,140" change="+38%" up />
                  <SlackChip label="Always-On Prospect" value="$1,820" change="+6%" up />
                  <SlackChip label="Lookalike 1%" value="$960" change="-4%" />
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: '#616061' }}>
                  Open in Verabix → <a href="#" style={{ color: '#1264A3' }}>verabix.com/c/holiday-retarget</a>
                </div>
              </div>
            } />
        </div>
      </div>
    </section>
  )
}

// ─── Integration section ──────────────────────────────────────────────────────
type Platform = 'google_ads' | 'meta_ads' | 'google_analytics'

const PLATFORM_CONFIG: Record<Platform, {
  name: string; icon: React.ReactNode; description: string
  metrics: { label: string; desc: string }[]
  policy: React.ReactNode
}> = {
  google_ads: {
    name: 'Google Ads',
    icon: <img src="/adwords.png" alt="Google Ads" style={{ width: 26, height: 26, objectFit: 'contain' }} />,
    description: 'Verabix connects to Google Ads through the official Google Ads API using OAuth 2.0. We never store your Google credentials — only an encrypted refresh token used exclusively to read your campaign data on your behalf.',
    metrics: [
      { label: 'Campaign spend',   desc: 'Track daily and lifetime spend across all campaigns and ad groups.' },
      { label: 'Impressions',      desc: 'See how many times your ads were shown across the Google network.' },
      { label: 'Clicks & CTR',     desc: 'Monitor click-through rates to understand ad relevance.' },
      { label: 'Conversions',      desc: 'Track actions that matter — purchases, leads, sign-ups.' },
      { label: 'ROAS',             desc: 'Measure return on ad spend directly in your dashboard.' },
      { label: 'Campaign status',  desc: 'See active, paused, and ended campaigns in a unified view.' },
    ],
    policy: (
      <>Verabix uses Google Ads data solely to display performance information to the authenticated account owner. We do not share, sell, or use this data for advertising, profiling, or any purpose beyond operating the Verabix dashboard. Our use of Google API data complies with the{' '}
      <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>Google API Services User Data Policy</a>, including the Limited Use requirements.</>
    ),
  },
  meta_ads: {
    name: 'Meta Ads',
    icon: (
      <svg role="img" viewBox="0 0 24 24" width="26" height="26" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    description: 'Verabix connects to Meta Ads through the official Marketing API using OAuth 2.0. Your credentials never leave Meta — Verabix only receives a scoped access token used to read your ad accounts on your behalf.',
    metrics: [
      { label: 'Ad spend',           desc: 'Track daily and lifetime spend across all ad accounts, campaigns and ad sets.' },
      { label: 'Reach & frequency',  desc: 'See how many unique people saw your ads and how often.' },
      { label: 'Creative breakdown', desc: 'Compare every ad creative side by side with previews and metrics.' },
      { label: 'Conversions',        desc: 'Pulled from your Meta Pixel and Conversions API setup.' },
      { label: 'Audience health',    desc: 'Lookalike and retargeting audience size, freshness and overlap.' },
      { label: 'Pause / resume',     desc: 'Toggle campaigns and ad sets without leaving Verabix.' },
    ],
    policy: (
      <>Verabix uses Meta Marketing API data solely to display ad performance to the authenticated account owner. We comply with{' '}
      <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>Meta Platform Terms</a> — your data is never shared with third parties, used for advertising, or used to train models.</>
    ),
  },
  google_analytics: {
    name: 'Google Analytics 4',
    icon: (
      <div style={{ width: 26, height: 26, borderRadius: 6, background: '#FFF7E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: '#F9AB00', letterSpacing: '-0.5px' }}>GA4</div>
    ),
    description: 'Verabix connects to Google Analytics 4 through the official Data API. We read your event and session data on your behalf so Vera can attribute conversions across platforms — and we only request the scopes we actually use.',
    metrics: [
      { label: 'Sessions & users',  desc: 'Daily and lifetime sessions, new and returning users, by source.' },
      { label: 'Source / medium',   desc: 'See exactly which channels drive traffic and conversions.' },
      { label: 'Event tracking',    desc: 'Map any GA4 event as a conversion in Verabix dashboards.' },
      { label: 'Funnel views',      desc: 'Step-by-step drop-off from landing to purchase.' },
      { label: 'Attribution',       desc: 'Compare GA4-observed conversions to platform-reported ones.' },
      { label: 'Revenue',           desc: 'Pull ecommerce revenue events into cross-channel ROAS.' },
    ],
    policy: (
      <>Verabix uses Google Analytics data solely to display analytics to the authenticated property owner. Our use complies with the{' '}
      <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: PURPLE }}>Google API Services User Data Policy</a> and Limited Use requirements. We never sell, share or use this data for advertising.</>
    ),
  },
}

function IntegrationSection({ platform, tint }: { platform: Platform; tint?: boolean }) {
  const p = PLATFORM_CONFIG[platform]
  return (
    <section style={{ background: tint ? TINT : BG, borderTop: `0.5px solid ${BORDER}`, borderBottom: `0.5px solid ${BORDER}`, padding: '64px 40px', fontFamily: FONT }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 10, background: tint ? BG : TINT, boxShadow: `0 1px 3px rgba(0,0,0,.06), 0 0 0 1px rgba(0,0,0,.06)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {p.icon}
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.4px', margin: 0, color: TEXT }}>{p.name} integration</h2>
        </div>
        <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: '0 0 32px' }}>{p.description}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {p.metrics.map(f => (
            <div key={f.label} style={{ background: tint ? BG : TINT, borderRadius: 10, padding: 18, border: `0.5px solid ${BORDER}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: TEXT, marginBottom: 6 }}>{f.label}</div>
              <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: '16px 20px', background: '#EEEDFE', borderRadius: 10, fontSize: 13, color: '#3D369E', lineHeight: 1.6 }}>
          <strong>Data use policy:</strong> {p.policy}
        </div>
      </div>
    </section>
  )
}

// ─── Waitlist ─────────────────────────────────────────────────────────────────
function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      if (res.ok)              setStatus('success')
      else if (res.status === 409) setStatus('duplicate')
      else { const j = await res.json(); setErrMsg(j.error || 'Something went wrong'); setStatus('error') }
    } catch {
      setErrMsg('Network error — please try again')
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" style={{ background: TINT, borderTop: `0.5px solid ${BORDER}`, padding: '100px 40px', fontFamily: FONT }}>
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 500, color: PURPLE, background: '#EEEDFE', borderRadius: 20, padding: '4px 14px', marginBottom: 20, letterSpacing: '0.2px' }}>
          Early access
        </div>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.8px', margin: '0 0 14px', color: TEXT }}>Get early access</h2>
        <p style={{ fontSize: 16, color: MUTED, margin: '0 0 40px', lineHeight: 1.7 }}>
          We&apos;re onboarding users gradually. Sign up and we&apos;ll reach out when your spot is ready.
        </p>

        {status === 'success' ? (
          <div style={{ background: '#EAF3DE', border: '0.5px solid #C0DD97', borderRadius: 14, padding: 32 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1A3D0A', marginBottom: 8 }}>You&apos;re on the list!</div>
            <div style={{ fontSize: 14, color: '#3B6D11' }}>We&apos;ll reach out when your spot is ready.</div>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div style={{ display: 'flex', gap: 8, background: BG, border: `0.5px solid ${BORDER}`, borderRadius: 12, padding: 6, boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
              <input
                type="email" value={email} required
                onChange={e => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                style={{ flex: 1, border: 'none', background: 'transparent', padding: '10px 12px', fontSize: 14, color: TEXT, outline: 'none', fontFamily: FONT }}
              />
              <button type="submit" disabled={status === 'loading' || !email.trim()} style={{
                padding: '10px 24px', background: status === 'loading' ? '#9490cc' : PURPLE, border: 'none', borderRadius: 8, color: '#fff',
                fontSize: 14, fontWeight: 600, cursor: status === 'loading' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap',
              }}>
                {status === 'loading' ? 'Joining…' : 'Join waitlist'}
              </button>
            </div>
            {status === 'duplicate' && <p style={{ marginTop: 10, fontSize: 13, color: MUTED }}>This email is already on the waitlist.</p>}
            {status === 'error'     && <p style={{ marginTop: 10, fontSize: 13, color: '#C0123C' }}>{errMsg}</p>}
            <p style={{ marginTop: 12, fontSize: 12, color: '#9CA3AF' }}>No credit card required. No spam.</p>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: `0.5px solid ${BORDER}`, padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: MUTED, maxWidth: 1240, margin: '0 auto', fontFamily: FONT }}>
      <span>© 2026 Verabix ApS · CVR: 46483839 · Odense, Denmark</span>
      <div style={{ display: 'flex', gap: 20 }}>
        <a href="/privacy" style={{ color: MUTED }}>Privacy Policy</a>
        <a href="/terms"   style={{ color: MUTED }}>Terms of Service</a>
        <a href="mailto:admin@verabix.com" style={{ color: MUTED }}>Contact</a>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div style={{ background: BG, fontFamily: FONT }}>
      <Nav />
      <main>
        <Hero />

        {/* The product */}
        <section id="features" style={{ background: BG, padding: '40px 40px 0', fontFamily: FONT }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>The product</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.2, margin: '0 0 14px', color: TEXT }}>
              Everything a marketing team needs, in one place.
            </h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, margin: '0 auto', maxWidth: 540 }}>
              Seven surfaces. One source of truth. Pick what you need from the sidebar — Vera is always one tab away.
            </p>
          </div>
        </section>

        <FeatureRow tint={false} eyebrow="Overview" title="One view for spend, ROAS and what Vera is watching."
          body="Every connected channel — Meta, Google Ads, GA4 — feeds into one dashboard. KPIs, source breakdown, top campaigns, active automations and Vera's open recommendations, all on one page."
          bullets={['KPI chips across paid + organic — 30, 7 or custom range', 'Top campaigns ranked by spend across every channel', 'Active automations and their latest runs']}
          preview={<OverviewPreview />} side="left" />

        <FeatureRow tint eyebrow="Dashboard" title="Build dashboards from prompts. No drag-drop, no PowerBI."
          body="Tell Vera what you want to see. She writes the query, picks the chart, pins it to your dashboard. The first useful dashboard takes 90 seconds — not a week of consulting."
          bullets={['"Show me Meta ROAS by creative this month" — done', 'Mix metrics from Meta, Google Ads and GA4 in one chart', 'Pin to your home dashboard or share via Slack']}
          preview={<DashboardPreview />} side="right" />

        <FeatureRow tint={false} eyebrow="Vera" title="Your new colleague who already read all your data."
          body="Vera is the chat surface inside Verabix — she sees every connected source, knows your campaigns by name, and answers in plain English. Ask anything, no SQL required."
          bullets={['Cross-channel reasoning — not just one platform at a time', 'Cites the numbers so you can double-check her work', 'Remembers your campaigns, brand names and goals']}
          preview={<VeraChatPreview />} side="left" />

        <VeraSlackRow />

        <FeatureRow tint eyebrow="Automate" title="Set the rules once. Vera enforces them everywhere."
          body="Global rules across every ad account. ROAS dips below 1.0 for two days? Pause the campaign, ping Slack, log the action. No more babysitting dashboards on weekends."
          bullets={['IF / THEN editor — readable, no code', 'Runs across Meta + Google Ads simultaneously', 'Audit log of every action Vera takes on your behalf']}
          preview={<AutomatePreview />} side="right" />

        <FeatureRow tint={false} eyebrow="Campaigns" title="See — and launch — every campaign without leaving."
          body="A unified table of every Meta and Google campaign with the same columns and the same controls. Create new campaigns here too, no jumping to Ads Manager."
          bullets={['One table for Meta + Google · sortable, searchable', 'Pause, resume and edit budgets in-app', 'Launch new campaigns with Vera\'s suggested targeting']}
          preview={<CampaignsPreview />} side="left" />

        <FeatureRow tint eyebrow="Attribution" title="Where the money actually came from."
          body="Meta says it drove 1,180 conversions. GA4 says 720. Vera shows the gap, explains why (view-through? cookie loss? dedupe?), and tells you which platform to trust for budget decisions."
          bullets={['Side-by-side: platform-reported vs GA4-observed', 'Vera explains the discrepancy in plain English', 'Reallocation suggestions backed by the data']}
          preview={<AttributionPreview />} side="right" />

        {/* The integrations */}
        <section id="integrations" style={{ background: BG, padding: '64px 40px 0', fontFamily: FONT }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>The integrations</div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.8px', lineHeight: 1.2, margin: '0 0 14px', color: TEXT }}>
              Built on the official APIs.
            </h2>
            <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.7, margin: '0 auto', maxWidth: 560 }}>
              OAuth 2.0 only. Encrypted refresh tokens. No data shared with third parties. The platforms call us a partner — your CISO can call us compliant.
            </p>
          </div>
        </section>

        <IntegrationSection platform="google_ads"       tint />
        <IntegrationSection platform="meta_ads"         tint={false} />
        <IntegrationSection platform="google_analytics" tint />

        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
