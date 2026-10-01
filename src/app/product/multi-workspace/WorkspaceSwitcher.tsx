'use client'

import { useState, useEffect, useRef } from 'react'

const WORKSPACES = [
  {
    name: 'Nordic Run DK',
    slug: 'nordic-run-dk',
    initials: 'NR',
    currency: 'DKK',
    sources: ['Meta Ads', 'Google Ads', 'GA4'],
    filter: null as string | null,
    kpis: [
      { label: 'Spend', value: 'DKK 84,210', delta: '+6%', up: true },
      { label: 'ROAS',  value: '4.6×',       delta: '+0.3', up: true },
      { label: 'Conv.', value: '1,284',       delta: '+9%',  up: true },
    ],
    chart: [22,26,24,31,29,35,33,38,36,42,40,46],
    vera: 'Branded Search is carrying ROAS this week. Prospecting CPA is up 18% since Monday.',
  },
  {
    name: 'Nordic Run SE',
    slug: 'nordic-run-se',
    initials: 'NR',
    currency: 'SEK',
    sources: ['Meta Ads', 'Google Ads'],
    filter: 'name contains “SE”',
    kpis: [
      { label: 'Spend', value: 'SEK 61,940', delta: '+2%',  up: true },
      { label: 'ROAS',  value: '3.9×',       delta: '−0.2', up: false },
      { label: 'Conv.', value: '902',         delta: '+4%',  up: true },
    ],
    chart: [30,28,33,31,30,34,29,32,35,33,36,34],
    vera: 'Reels creative is beating feed 2 : 1 in Sweden. Worth moving budget.',
  },
  {
    name: 'Bloom Studio',
    slug: 'bloom-studio',
    initials: 'BS',
    currency: 'EUR',
    sources: ['Meta Ads', 'GA4'],
    filter: null,
    kpis: [
      { label: 'Spend', value: '€12,480', delta: '+11%', up: true },
      { label: 'ROAS',  value: '5.2×',        delta: '+0.6', up: true },
      { label: 'Conv.', value: '318',          delta: '+14%', up: true },
    ],
    chart: [18,20,19,24,27,26,30,33,35,34,39,43],
    vera: 'Retargeting frequency hit 3.4. Time to refresh the creative.',
  },
  {
    name: 'Fjord Coffee',
    slug: 'fjord-coffee',
    initials: 'FC',
    currency: 'DKK',
    sources: ['Google Ads', 'GA4'],
    filter: null,
    kpis: [
      { label: 'Spend', value: 'DKK 22,700', delta: '−3%',  up: false },
      { label: 'ROAS',  value: '3.1×',       delta: '−0.4', up: false },
      { label: 'Conv.', value: '640',         delta: '−6%',  up: false },
    ],
    chart: [40,38,39,36,37,34,35,32,33,30,31,29],
    vera: 'Search impression share dropped 9 points since Monday. A competitor is bidding on your brand.',
  },
]

function Sparkline({ pts }: { pts: number[] }) {
  const min = Math.min(...pts)
  const max = Math.max(...pts)
  const W = 400
  const H = 80
  const pad = 4
  const xs = pts.map((_, i) => pad + (i / (pts.length - 1)) * (W - pad * 2))
  const ys = pts.map(v => H - pad - ((v - min) / (max - min || 1)) * (H - pad * 2))
  const poly = xs.map((x, i) => `${x},${ys[i]}`).join(' ')
  const area = `${xs[0]},${H} ` + poly + ` ${xs[xs.length - 1]},${H}`
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <polygon points={area} fill="#EEF1FA" />
      <polyline points={poly} fill="none" stroke="#1B3A8C" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

function VeraSymbol() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#1B3A8C" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
    </svg>
  )
}

export default function WorkspaceSwitcher() {
  const [active, setActive] = useState(0)
  const [fade, setFade] = useState(true)
  const stoppedRef = useRef(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function switchTo(i: number, stopAuto = false) {
    if (stopAuto) stoppedRef.current = true
    setFade(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setActive(i)
        setFade(true)
      })
    })
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    intervalRef.current = setInterval(() => {
      if (stoppedRef.current) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        return
      }
      setActive(prev => {
        const next = (prev + 1) % WORKSPACES.length
        setFade(false)
        requestAnimationFrame(() => requestAnimationFrame(() => setFade(true)))
        return next
      })
    }, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const ws = WORKSPACES[active]

  return (
    <div className="mwa">
      {/* Browser bar */}
      <div className="mwb">
        <div className="lock" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <LogoMark />
          <span style={{ fontSize: 19, fontWeight: 600, letterSpacing: '-0.045em' }}>verabix</span>
        </div>
        <div className="mwsw">
          <span className="mwdot" />
          <b>{ws.name}</b>
          <span className="mwcar">&#9660;</span>
        </div>
        <span className="mwurl mono">app.verabix.com/{ws.slug}/overview</span>
      </div>

      {/* Body */}
      <div className="mwg">
        {/* Sidebar */}
        <div className="mwl">
          <span className="mono">WORKSPACES</span>
          <ul>
            {WORKSPACES.map((w, i) => (
              <li key={i}>
                <button
                  className={active === i ? 'on' : ''}
                  onClick={() => switchTo(i, true)}
                >
                  <span className="mwin">{w.initials}</span>
                  <span className="mwnm">{w.name}</span>
                  <span className="mono">{w.currency}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="mwnew">+ New workspace</div>
        </div>

        {/* Panel */}
        <div className={`mwp${fade ? ' fade' : ''}`} key={active}>
          {/* Header */}
          <div>
            <div className="mwph0">
              <div>
                <h3>{ws.name}</h3>
                <div className="mwsrc">
                  {ws.sources.map(s => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                  {ws.filter && <span className="mwfl">{ws.filter}</span>}
                </div>
              </div>
              <span className="mono">OVERVIEW &middot; LAST 30 DAYS &middot; {ws.currency}</span>
            </div>
          </div>

          {/* KPI strip */}
          <div className="mwk">
            {ws.kpis.map((k, i) => (
              <div key={i}>
                <span className="mono">{k.label}</span>
                <b>{k.value}</b>
                <em className={k.up ? 'up' : 'dn'}>{k.delta} vs. prev.</em>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mwch">
            <span className="mono">REVENUE &middot; DAILY</span>
            <Sparkline pts={ws.chart} />
          </div>

          {/* Vera note */}
          <div className="mwv">
            <VeraSymbol />
            <p>{ws.vera}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
