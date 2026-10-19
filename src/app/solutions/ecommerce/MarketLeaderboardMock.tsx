'use client'

import { useEffect, useRef, useState } from 'react'

type Creative = {
  name: string
  format: 'Video' | 'Image'
  spend: number
  spendLabel: string
  ctr: number
  ctrLabel: string
  cpc: number
  cpcLabel: string
}

type Market = {
  k: string
  n: string
  c: string
  r: string
  note: React.ReactNode
  cr: Creative[]
}

const MARKETS: Market[] = [
  {
    k: 'DK', n: 'Denmark', c: 'DKK', r: '4.8×',
    note: <>Video is beating static <b>2 : 1</b> on CTR in Denmark. The UGC reel has the lowest CPC of the month.</>,
    cr: [
      { name: 'Autumn drop — UGC reel',  format: 'Video', spend: 18420, spendLabel: 'DKK 18,420', ctr: 3.4, ctrLabel: '3.4%', cpc: 2.10, cpcLabel: 'DKK 2.10' },
      { name: 'Rain jacket — carousel',  format: 'Image', spend: 12960, spendLabel: 'DKK 12,960', ctr: 2.6, ctrLabel: '2.6%', cpc: 2.85, cpcLabel: 'DKK 2.85' },
      { name: 'Free shipping — static',  format: 'Image', spend: 9300,  spendLabel: 'DKK 9,300',  ctr: 1.9, ctrLabel: '1.9%', cpc: 3.40, cpcLabel: 'DKK 3.40' },
      { name: 'Founder story — 30s',     format: 'Video', spend: 6150,  spendLabel: 'DKK 6,150',  ctr: 1.4, ctrLabel: '1.4%', cpc: 4.20, cpcLabel: 'DKK 4.20' },
    ],
  },
  {
    k: 'SE', n: 'Sweden', c: 'SEK', r: '3.9×',
    note: <>The carousel leads in Sweden &mdash; but it has run 6 weeks and CTR is down <b>28%</b> since launch. Time for a refresh.</>,
    cr: [
      { name: 'Rain jacket — carousel',  format: 'Image', spend: 14200, spendLabel: 'SEK 14,200', ctr: 2.9, ctrLabel: '2.9%', cpc: 3.10, cpcLabel: 'SEK 3.10' },
      { name: 'Autumn drop — UGC reel',  format: 'Video', spend: 11800, spendLabel: 'SEK 11,800', ctr: 2.7, ctrLabel: '2.7%', cpc: 3.30, cpcLabel: 'SEK 3.30' },
      { name: 'Bundle offer — static',   format: 'Image', spend: 7450,  spendLabel: 'SEK 7,450',  ctr: 1.8, ctrLabel: '1.8%', cpc: 4.60, cpcLabel: 'SEK 4.60' },
      { name: 'Founder story — 30s',     format: 'Video', spend: 5100,  spendLabel: 'SEK 5,100',  ctr: 1.2, ctrLabel: '1.2%', cpc: 5.80, cpcLabel: 'SEK 5.80' },
    ],
  },
  {
    k: 'DE', n: 'Germany', c: 'EUR', r: '3.2×',
    note: <>In Germany the <b>bundle offer</b> outperforms everything with a price point. Lead with the offer, not the story.</>,
    cr: [
      { name: 'Bundle offer — static',   format: 'Image', spend: 2840, spendLabel: '€2,840', ctr: 3.1, ctrLabel: '3.1%', cpc: 0.38, cpcLabel: '€0.38' },
      { name: 'Autumn drop — UGC reel',  format: 'Video', spend: 2210, spendLabel: '€2,210', ctr: 2.4, ctrLabel: '2.4%', cpc: 0.46, cpcLabel: '€0.46' },
      { name: 'Rain jacket — carousel',  format: 'Image', spend: 1690, spendLabel: '€1,690', ctr: 2.0, ctrLabel: '2.0%', cpc: 0.55, cpcLabel: '€0.55' },
      { name: 'Free returns — static',   format: 'Image', spend: 960,  spendLabel: '€960',   ctr: 1.3, ctrLabel: '1.3%', cpc: 0.71, cpcLabel: '€0.71' },
    ],
  },
  {
    k: 'NO', n: 'Norway', c: 'NOK', r: '4.1×',
    note: <>Norway is your cheapest market per click. The UGC reel is at <b>NOK 2.40</b> CPC &mdash; room to scale.</>,
    cr: [
      { name: 'Autumn drop — UGC reel',  format: 'Video', spend: 9880, spendLabel: 'NOK 9,880', ctr: 3.6, ctrLabel: '3.6%', cpc: 2.40, cpcLabel: 'NOK 2.40' },
      { name: 'Free shipping — static',  format: 'Image', spend: 6200, spendLabel: 'NOK 6,200', ctr: 2.2, ctrLabel: '2.2%', cpc: 3.15, cpcLabel: 'NOK 3.15' },
      { name: 'Rain jacket — carousel',  format: 'Image', spend: 5740, spendLabel: 'NOK 5,740', ctr: 2.1, ctrLabel: '2.1%', cpc: 3.30, cpcLabel: 'NOK 3.30' },
      { name: 'Founder story — 30s',     format: 'Video', spend: 3020, spendLabel: 'NOK 3,020', ctr: 1.1, ctrLabel: '1.1%', cpc: 5.10, cpcLabel: 'NOK 5.10' },
    ],
  },
]

type SortKey = 'spend' | 'ctr' | 'cpc'

function VeraIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function MarketLeaderboardMock() {
  const [active, setActive] = useState(0)
  const [sortKey, setSortKey] = useState<SortKey | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
  const [fadeKey, setFadeKey] = useState(0)
  const userRef = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (userRef.current) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timerRef.current = setTimeout(() => {
      setActive(a => (a + 1) % MARKETS.length)
    }, 4200)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active])

  useEffect(() => {
    setFadeKey(k => k + 1)
  }, [active, sortKey, sortDir])

  const market = MARKETS[active]
  const maxCtr = Math.max(...market.cr.map(c => c.ctr))
  const rows = sortKey
    ? [...market.cr].sort((a, b) => (sortDir === 'asc' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]))
    : market.cr

  function handleTab(i: number) {
    userRef.current = true
    if (timerRef.current) clearTimeout(timerRef.current)
    setActive(i)
  }

  function handleSort(key: SortKey) {
    userRef.current = true
    if (timerRef.current) clearTimeout(timerRef.current)
    setSortKey(prev => {
      if (prev === key) {
        setSortDir(d => (d === 'desc' ? 'asc' : 'desc'))
        return key
      }
      setSortDir('desc')
      return key
    })
  }

  function SortHeader({ label, k }: { label: string; k: SortKey }) {
    return (
      <button type="button" className={`ecsb${sortKey === k ? ' on' : ''}`} onClick={() => handleSort(k)}>
        {label}
        {sortKey === k && <span className="ecsa">{sortDir === 'desc' ? '↓' : '↑'}</span>}
      </button>
    )
  }

  return (
    <div className="ecm">
      <div className="ecmh">
        <div className="ecmk" role="tablist">
          {MARKETS.map((m, i) => (
            <button key={m.k} type="button" className={i === active ? 'on' : ''} onClick={() => handleTab(i)}>
              <b>{m.k}</b>
              <span>{m.n}</span>
            </button>
          ))}
        </div>
        <span className="mono">Creatives &middot; Last 30 days &middot; {market.c}</span>
      </div>

      <div className="ecmb fade" key={fadeKey}>
        <div className="ecl">
          <div className="ecr0 h">
            <span>#</span>
            <span></span>
            <span>Ad</span>
            <span className="num sp"><SortHeader label="Spend" k="spend" /></span>
            <span className="num"><SortHeader label="CTR" k="ctr" /></span>
            <span className="num cpc"><SortHeader label="CPC" k="cpc" /></span>
          </div>
          {rows.map((c, j) => (
            <div className="ecr0" key={c.name}>
              <span className="rk">0{j + 1}</span>
              <span className={`ecth t${j % 4}${c.format === 'Video' ? ' vid' : ''}`} />
              <span className="ecnm">
                <b>{c.name}</b>
                <span>{c.format === 'Video' ? 'VIDEO' : 'IMAGE'}</span>
              </span>
              <span className="num sp">{c.spendLabel}</span>
              <span className="num ctr ecctr">
                {c.ctrLabel}
                <i style={{ width: `${Math.round((c.ctr / maxCtr) * 52)}px` }} />
              </span>
              <span className="num cpc">{c.cpcLabel}</span>
            </div>
          ))}
        </div>
        <div className="ecv">
          <div className="ecvk">
            <div><span className="mono">Market</span><b>{market.k}</b></div>
            <div><span className="mono">ROAS</span><b>{market.r}</b></div>
          </div>
          <div className="ecvn">
            <VeraIcon />
            <p>{market.note}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
