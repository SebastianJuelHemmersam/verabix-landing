'use client'

import { useState, useEffect, useRef } from 'react'

const CAMPAIGNS = [
  { label: 'DK — Prospecting Broad', t: 'dk' },
  { label: 'SE — Reels Lookalike',   t: 'se' },
  { label: 'DE — Retargeting 30d',   t: 'de' },
  { label: 'DK — Brand Search',      t: 'dk' },
  { label: 'SE — Prospecting Broad', t: 'se' },
  { label: 'DE — Spring Sale',       t: 'de' },
  { label: 'DK — Reels Lookalike',   t: 'dk' },
]

const WORKSPACES = [
  { id: 'dk', name: 'Nordic Run DK', filter: 'name contains “DK”', count: '3 campaigns' },
  { id: 'se', name: 'Nordic Run SE', filter: 'name contains “SE”', count: '2 campaigns' },
  { id: 'de', name: 'Nordic Run DE', filter: 'name contains “DE”', count: '2 campaigns' },
]

const CYCLE: Array<'dk' | 'se' | 'de'> = ['dk', 'se', 'de']

export default function CampaignFilterDiagram() {
  const [active, setActive] = useState<'dk' | 'se' | 'de'>('dk')
  const stoppedRef = useRef(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const idxRef = useRef(0)

  function select(id: 'dk' | 'se' | 'de', stop = false) {
    if (stop) stoppedRef.current = true
    setActive(id)
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    intervalRef.current = setInterval(() => {
      if (stoppedRef.current) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        return
      }
      idxRef.current = (idxRef.current + 1) % CYCLE.length
      setActive(CYCLE[idxRef.current])
    }, 2600)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  return (
    <div className="mwf" data-active={active}>
      {/* Ad account card */}
      <div className="mwfa">
        <div className="mwfh">
          <span className="mono">META AD ACCOUNT</span>
          <b>Nordic Run &mdash; All markets</b>
        </div>
        <ul>
          {CAMPAIGNS.map((c, i) => (
            <li key={i} data-t={c.t}>
              <i />
              {c.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Connector */}
      <div className="mwfx"><span /></div>

      {/* Workspace cards */}
      <div className="mwfw">
        {WORKSPACES.map(w => (
          <button
            key={w.id}
            className={`mwfc${active === w.id ? ' on' : ''}`}
            onClick={() => select(w.id as 'dk' | 'se' | 'de', true)}
            onMouseEnter={() => select(w.id as 'dk' | 'se' | 'de', true)}
            onFocus={() => select(w.id as 'dk' | 'se' | 'de', true)}
          >
            <b>{w.name}</b>
            <span className="mwff">{w.filter}</span>
            <span className="mono">{w.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
