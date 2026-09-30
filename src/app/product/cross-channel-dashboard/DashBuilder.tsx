'use client'

import { useState, useEffect, useRef } from 'react'

type DeltaClass = 'up' | 'dn' | 'nt'

type Widget =
  | { type: 'kpi'; title: string; value: string; delta: string; dc: DeltaClass; span?: number; isNew?: boolean }
  | { type: 'line'; title: string; lp: string; ap: string; span?: number; isNew?: boolean }
  | { type: 'bar'; title: string; bars: Array<{ l: string; pct: number; g?: boolean }>; span?: number; isNew?: boolean }
  | { type: 'table'; title: string; rows: Array<{ n: string; spend: string; ctr: string; cpc: string; g?: boolean }>; span?: number; isNew?: boolean }

const LP1 = 'M0 68 C20 60 50 55 80 46 S110 38 140 30 S170 22 200 18'
const AP1 = LP1 + ' L200 80 L0 80 Z'
const LP2 = 'M0 72 C15 62 40 50 70 36 S100 20 130 11 S165 5 200 3'
const AP2 = LP2 + ' L200 80 L0 80 Z'

const W1: Widget[] = [
  { type: 'kpi', title: 'Spend · All',       value: 'DKK 96,420', delta: '+8%',   dc: 'nt' },
  { type: 'kpi', title: 'ROAS · All',         value: '3.9×',  delta: '+0.2', dc: 'up' },
  { type: 'kpi', title: 'CPA · All',          value: 'DKK 318',    delta: '−6%',  dc: 'up' },
  { type: 'kpi', title: 'Conversions · All',  value: '1,297',      delta: '+11%', dc: 'up' },
  {
    type: 'line', title: 'ROAS by day · All channels',
    lp: LP1, ap: AP1, span: 2,
  },
  {
    type: 'bar', title: 'Spend by campaign', span: 2,
    bars: [
      { l: 'Spring Sale', pct: 82, g: true },
      { l: 'Retargeting',  pct: 64 },
      { l: 'Brand DK',     pct: 44, g: true },
      { l: 'Prospecting',  pct: 92 },
      { l: 'Black Friday', pct: 58 },
    ],
  },
  {
    type: 'table', title: 'Top campaigns · 30 days', span: 4,
    rows: [
      { n: 'Spring Sale — PMax',       spend: 'DKK 48,210', ctr: '2.4%', cpc: 'DKK 4.10', g: true },
      { n: 'Retargeting — Catalog',    spend: 'DKK 36,940', ctr: '1.9%', cpc: 'DKK 5.60' },
      { n: 'Brand Search DK',               spend: 'DKK 21,300', ctr: '8.1%', cpc: 'DKK 2.30', g: true },
    ],
  },
]

const W2: Widget[] = [
  { type: 'kpi', title: 'Spend · All',       value: 'DKK 71,880', delta: '+14%', dc: 'nt' },
  { type: 'kpi', title: 'ROAS · Google',     value: '5.2×',  delta: '+0.9', dc: 'up', isNew: true },
  { type: 'kpi', title: 'CPA · All',         value: 'DKK 244',    delta: '−11%', dc: 'up' },
  { type: 'kpi', title: 'Conversions · All', value: '1,014',      delta: '+19%', dc: 'up' },
  {
    type: 'line', title: 'ROAS by day · Google Ads',
    lp: LP2, ap: AP2, span: 2, isNew: true,
  },
  {
    type: 'bar', title: 'Spend by campaign', span: 2, isNew: true,
    bars: [
      { l: 'Spring Sale PMax', pct: 82, g: true },
      { l: 'Spring Sale Meta', pct: 66 },
      { l: 'Black Friday',     pct: 58 },
      { l: 'BF Retarget',      pct: 40 },
    ],
  },
  {
    type: 'table', title: 'Top campaigns · 30 days', span: 4, isNew: true,
    rows: [
      { n: 'Spring Sale — PMax',          spend: 'DKK 48,210', ctr: '2.4%', cpc: 'DKK 4.10', g: true },
      { n: 'Spring Sale — Meta Broad',    spend: 'DKK 14,960', ctr: '1.6%', cpc: 'DKK 6.20' },
      { n: 'Black Friday — Early Access', spend: 'DKK 8,710',  ctr: '2.9%', cpc: 'DKK 3.90' },
    ],
  },
]

const STEPS = [
  {
    q: 'Weekly performance for Meta and Google — spend, ROAS, CPA and top campaigns.',
    chips: [] as string[],
    status: 'draft' as const,
  },
  {
    q: 'Only show Spring Sale and Black Friday. Switch ROAS to Google only.',
    chips: ['Campaign contains: Spring Sale, Black Friday', 'ROAS: Google Ads'],
    status: 'editing' as const,
  },
  {
    q: 'Publish it for the office screen.',
    chips: ['Campaign contains: Spring Sale, Black Friday', 'ROAS: Google Ads'],
    status: 'published' as const,
  },
]

function WidgetCard({ w, showNew, delay }: { w: Widget; showNew: boolean; delay: number }) {
  const s = w.span
  const cls = ['w', s === 4 ? 'c4' : s === 2 ? 'c2' : '', showNew && w.isNew ? 'new' : '']
    .filter(Boolean).join(' ')

  return (
    <div className={cls} style={{ animationDelay: `${delay}ms` }}>
      {w.type === 'kpi' && (
        <>
          <span className="wt">{w.title}</span>
          <b>{w.value}</b>
          <em className={w.dc}>{w.delta}</em>
        </>
      )}
      {w.type === 'line' && (
        <>
          <span className="wt">{w.title}</span>
          <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
            <path d={w.ap} fill="rgba(27,58,140,0.07)" />
            <path d={w.lp} fill="none" stroke="#1B3A8C" strokeWidth="2" />
          </svg>
        </>
      )}
      {w.type === 'bar' && (
        <>
          <span className="wt">{w.title}</span>
          <div className="bars2">
            {w.bars.map((b, i) => (
              <div key={i}>
                <i className={b.g ? 'g' : ''} style={{ height: `${b.pct}%` }} />
                <span>{b.l}</span>
              </div>
            ))}
          </div>
        </>
      )}
      {w.type === 'table' && (
        <>
          <span className="wt">{w.title}</span>
          <div className="wtb">
            <div className="h">
              <span />
              <span>Campaign</span>
              <span>Spend</span>
              <span>CTR</span>
              <span>CPC</span>
            </div>
            {w.rows.map((row, i) => (
              <div key={i}>
                <span className={row.g ? 'cd g' : 'cd'} />
                <span className="nm">{row.n}</span>
                <span>{row.spend}</span>
                <span>{row.ctr}</span>
                <span>{row.cpc}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function DashBuilder() {
  const [activeTab, setActiveTab] = useState(0)
  const [promptText, setPromptText] = useState('')
  const [filterChips, setFilterChips] = useState<string[]>([])
  const [statusVariant, setStatusVariant] = useState<'draft' | 'editing' | 'published'>('draft')
  const [widgetSet, setWidgetSet] = useState<-1 | 0 | 1>(-1)
  const [showNew, setShowNew] = useState(false)
  const [canvasKey, setCanvasKey] = useState(0)
  const [instant, setInstant] = useState(false)

  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const auto = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wsRef = useRef<-1 | 0 | 1>(-1)

  function clearAll() {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (auto.current) { clearTimeout(auto.current); auto.current = null }
  }

  function play(n: number, user = false) {
    clearAll()
    setActiveTab(n)
    setPromptText('')

    const s = STEPS[n]
    s.q.split('').forEach((ch, i) => {
      timers.current.push(setTimeout(() => setPromptText(p => p + ch), 24 * i))
    })

    const d = 24 * s.q.length + 300
    timers.current.push(setTimeout(() => {
      setFilterChips(s.chips)
      setStatusVariant(s.status)
      if (n === 0) {
        wsRef.current = 0
        setWidgetSet(0)
        setShowNew(false)
        setInstant(false)
        setCanvasKey(k => k + 1)
      } else if (n === 1) {
        wsRef.current = 1
        setWidgetSet(1)
        setShowNew(true)
        setInstant(false)
        setCanvasKey(k => k + 1)
      } else {
        if (wsRef.current === 1) {
          setShowNew(false)
        } else {
          wsRef.current = 1
          setWidgetSet(1)
          setShowNew(false)
          setInstant(true)
          setCanvasKey(k => k + 1)
        }
      }
    }, d))

    if (!user) {
      auto.current = setTimeout(() => play((n + 1) % 3), d + (n === 2 ? 5000 : 4500))
    }
  }

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setActiveTab(0)
      setPromptText(STEPS[0].q)
      setFilterChips(STEPS[0].chips)
      setStatusVariant(STEPS[0].status)
      wsRef.current = 0
      setWidgetSet(0)
      setShowNew(false)
      setInstant(true)
      setCanvasKey(1)
    } else {
      play(0)
    }
    return clearAll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const widgets = widgetSet === 0 ? W1 : widgetSet === 1 ? W2 : []

  return (
    <div className="bld">
      <div className="btop">
        <div className="stp" role="tablist">
          {(['Prompt', 'Edit', 'Publish'] as const).map((label, i) => (
            <button
              key={i}
              className={i === activeTab ? 'on' : i < activeTab ? 'done' : ''}
              role="tab"
              aria-selected={i === activeTab}
              onClick={() => play(i, true)}
            >
              <span>{String(i + 1).padStart(2, '0')}</span>
              {label}
            </button>
          ))}
        </div>
        <div className="bst">
          {statusVariant === 'published' ? (
            <span className="plink">
              verabix.com/d/k7p2-marketing
              <em>Copy link</em>
              <span className="pill">
                <i style={{ background: '#1F9D55' }} />
                Published &middot; No login
              </span>
            </span>
          ) : (
            <span className="pill">
              <i className="vd" />
              {statusVariant === 'draft' ? 'Draft' : 'Editing'}
            </span>
          )}
        </div>
      </div>

      <div className="bpr">
        <svg className="bav" viewBox="0 0 64 64" aria-hidden="true">
          <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
          <path
            d="M19 23L32 45L45 23"
            fill="none"
            stroke="#fff"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
        </svg>
        <span className="bq">{promptText}</span>
        <span className="caret" aria-hidden="true" />
      </div>

      <div className="bfl">
        {filterChips.map((chip, i) => (
          <span key={i} className="chip">{chip}</span>
        ))}
      </div>

      <div className="cvs" key={canvasKey}>
        {widgets.map((w, i) => (
          <WidgetCard
            key={`${w.type}-${i}`}
            w={w}
            showNew={showNew}
            delay={instant ? 0 : i * 90}
          />
        ))}
      </div>
    </div>
  )
}
