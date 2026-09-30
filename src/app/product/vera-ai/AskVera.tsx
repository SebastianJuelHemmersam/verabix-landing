'use client'

import { useState, useEffect, useRef } from 'react'

const Q = [
  {
    q: 'Why is CPA up this week?',
    a: 'CPA rose <b>22%</b> — all of it from Meta Prospecting. CPM is flat, but CTR dropped from <b>1.4%</b> to <b>0.9%</b> after Tuesday’s creative swap. The old creative is still the better performer.',
    src: 'Meta Ads · Last 7 days',
  },
  {
    q: 'Where should the next DKK 40,000 go?',
    a: 'Google PMax has the most headroom: <b>4.1× ROAS</b> at only 62% impression share. Put <b>DKK 25,000</b> there and <b>DKK 15,000</b> on Meta Retargeting. Expected blended ROAS: <b>3.4× → 3.9×</b>.',
    src: 'Meta + Google · Last 30 days',
  },
  {
    q: 'Is Meta overcounting conversions?',
    a: 'Yes. Meta reports <b>1,284</b> purchases. GA4 observed <b>1,041</b> from Meta traffic. The gap is mostly 1-day view-through. Use GA4 for budget decisions.',
    src: 'Meta vs. GA4 · September',
  },
  {
    q: 'Build me a ROAS-by-market dashboard.',
    a: 'Done. <b>4 charts</b> pinned to “Markets · Q3”: ROAS, spend, CPA and revenue for DK, SE and NO. Norway is your weakest market at <b>2.2×</b>.',
    src: 'Dashboard created in Verabix',
  },
]

type Phase = 'typing' | 'thinking' | 'answer'

export default function AskVera() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const auto = useRef<ReturnType<typeof setTimeout> | null>(null)
  const userSelected = useRef(false)

  function clearAll() {
    timers.current.forEach(clearTimeout)
    timers.current = []
    if (auto.current) {
      clearTimeout(auto.current)
      auto.current = null
    }
  }

  function play(n: number, user = false) {
    clearAll()
    setIndex(n)
    setTyped('')
    setPhase('typing')

    const { q } = Q[n]
    q.split('').forEach((ch, k) => {
      timers.current.push(setTimeout(() => setTyped(p => p + ch), 28 * k))
    })

    const d = 28 * q.length + 250
    timers.current.push(setTimeout(() => setPhase('thinking'), d))
    timers.current.push(setTimeout(() => setPhase('answer'), d + 1100))

    if (!user) {
      auto.current = setTimeout(() => play((n + 1) % Q.length), d + 7000)
    }
  }

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setIndex(0)
      setTyped(Q[0].q)
      setPhase('answer')
    } else {
      play(0)
    }
    return clearAll
    // play and clearAll are stable (only access refs + state setters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleChip(i: number) {
    userSelected.current = true
    play(i, true)
  }

  const isShow = phase === 'thinking' || phase === 'answer'
  const isThink = phase === 'thinking'
  const current = Q[index]

  return (
    <div className="ask" id="ask">
      <div className="askin">
        <svg className="askav" viewBox="0 0 64 64" aria-hidden="true">
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
        <span className="askq">{typed}</span>
        <span className="caret" aria-hidden="true" />
        <span className="asksend" aria-hidden="true">↑</span>
      </div>

      <div
        className={`ans${isShow ? ' show' : ''}${isThink ? ' think' : ''}`}
        id="ans"
        aria-live="polite"
      >
        <div className="ansh">
          <span className="mono ink">
            <i className="vd" />
            <span>{isThink ? 'Vera · Reading your data' : 'Vera answers'}</span>
          </span>
          {phase === 'answer' && (
            <span className="src">{current.src}</span>
          )}
        </div>
        {phase === 'answer' && (
          <p dangerouslySetInnerHTML={{ __html: current.a }} />
        )}
        {isThink && <p>&nbsp;</p>}
      </div>

      <div className="chips" id="chips">
        {Q.map((item, i) => (
          <button
            key={i}
            className={`chip${i === index ? ' on' : ''}`}
            onClick={() => handleChip(i)}
          >
            {item.q}
          </button>
        ))}
      </div>
    </div>
  )
}
