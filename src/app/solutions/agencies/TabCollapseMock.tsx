'use client'

import { useEffect, useRef, useState } from 'react'

const CLIENTS = ['Bloom Studio', 'Fjord Coffee', 'Nordic Run DK', 'Halo Dental', 'Urban Eats', 'Kobber & Co']

const TOOLS = [
  { cls: 't0', label: 'Meta Ads Manager' },
  { cls: 't1', label: 'Google Ads' },
  { cls: 't2', label: 'GA4' },
  { cls: 't3', label: 'Report.xlsx' },
]

const TABS = CLIENTS.flatMap((client, ci) =>
  TOOLS.map((tool, ti) => ({
    client,
    ...tool,
    delay: (ci * 4 + ti) * 18,
  }))
)

const RESULT_CLIENTS = [
  { initials: 'BS', name: 'Bloom Studio',  roas: '5.2×', status: 'v', text: 'Vera · 2 new recommendations',     delay: 0 },
  { initials: 'FC', name: 'Fjord Coffee',  roas: '3.1×', status: 'w', text: 'Rule fired · Brand Search paused', delay: 70 },
  { initials: 'NR', name: 'Nordic Run DK', roas: '4.6×', status: '',  text: 'All within rules',                 delay: 140 },
  { initials: 'HD', name: 'Halo Dental',   roas: '2.8×', status: '',  text: 'Dashboard link shared',            delay: 210 },
  { initials: 'UE', name: 'Urban Eats',    roas: '4.1×', status: '',  text: 'Sheet · 6 campaigns created',      delay: 280 },
  { initials: 'KC', name: 'Kobber & Co',   roas: '3.7×', status: '',  text: 'All within rules',                 delay: 350 },
]

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function TabCollapseMock() {
  const [s, setS] = useState<0 | 1>(0)
  const [count, setCount] = useState(24)
  const userRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  function animateCount(from: number, to: number) {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const t0 = performance.now()
    const D = 700
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / D)
      const e = 1 - Math.pow(1 - k, 3)
      setCount(Math.round(from + (to - from) * e))
      if (k < 1) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  function set(next: 0 | 1) {
    setS(prev => {
      if (prev === next) return prev
      animateCount(prev === 1 ? 1 : 24, next === 1 ? 1 : 24)
      return next
    })
  }

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          io.disconnect()
          setTimeout(() => {
            if (!userRef.current) set(1)
          }, reduced ? 0 : 1800)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  function handleClick(next: 0 | 1) {
    userRef.current = true
    set(next)
  }

  return (
    <div className="agw" data-s={s} ref={wrapRef}>
      <div className="agwb">
        <div className="agtg" role="tablist">
          <button type="button" data-s={0} className={s === 0 ? 'on' : ''} onClick={() => handleClick(0)}>
            Without Verabix
          </button>
          <button type="button" data-s={1} className={s === 1 ? 'on' : ''} onClick={() => handleClick(1)}>
            With Verabix
          </button>
        </div>
        <span className="mono agct">
          <b>{count}</b> <span>{count === 1 ? 'tab open' : 'tabs open'}</span>
        </span>
      </div>

      <div className="agst">
        <div className="agb">
          {TABS.map((tab, i) => (
            <div key={i} className={`agtab ${tab.cls}`} style={{ '--d': `${tab.delay}ms` } as React.CSSProperties}>
              <i />
              <span><b>{tab.label}</b> — {tab.client}</span>
              <em>×</em>
            </div>
          ))}
        </div>

        <div className="aga">
          <div className="agah">
            <span className="agone"><VeraIconGlow />Verabix</span>
            <span className="mono">app.verabix.com · 6 workspaces</span>
          </div>
          <div className="agcl">
            {RESULT_CLIENTS.map(c => (
              <div key={c.initials} className="agc" style={{ '--d': `${c.delay}ms` } as React.CSSProperties}>
                <div className="agch">
                  <span className="mwin">{c.initials}</span>
                  <b>{c.name}</b>
                  <span className="agr">{c.roas}</span>
                </div>
                <div className="agsrc">
                  <span>Meta</span><span>Google</span><span>GA4</span>
                </div>
                <p><i className={c.status} />{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
