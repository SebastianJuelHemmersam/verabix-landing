'use client'

import { useState } from 'react'

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

const QUESTIONS = [
  {
    q: 'Why is CPA up this week?',
    answer: (
      <>
        Meta Prospecting is up <b>DKK 96</b> since Tuesday &mdash; frequency hit{' '}
        <b>3.6</b> on the spring creative. Google is flat. Refresh the creative, or
        cap frequency.
      </>
    ),
    rows: [
      { name: 'Meta · Prospecting', value: 'DKK 412', tag: '+30%', cls: 'dn' },
      { name: 'Google · Search', value: 'DKK 238', tag: '−2%', cls: 'up' },
      { name: 'Meta · Retargeting', value: 'DKK 181', tag: '+4%', cls: 'dn' },
    ],
  },
  {
    q: 'Which channel drove the most revenue?',
    answer: (
      <>
        Google Ads by platform numbers, Meta by first touch. GA4 last-click puts{' '}
        <b>Google Search</b> first with <b>DKK 412k</b>, then <b>Direct</b> with
        DKK 188k.
      </>
    ),
    rows: [
      { name: 'Google · Search', value: 'DKK 412k', tag: '41%', cls: '' },
      { name: 'Direct', value: 'DKK 188k', tag: '19%', cls: '' },
      { name: 'Meta Ads', value: 'DKK 176k', tag: '18%', cls: '' },
    ],
  },
  {
    q: 'What should we change before Friday?',
    answer: (
      <>
        Move <b>15%</b> of Prospecting budget to <b>Reels &mdash; Lookalike</b> (ROAS
        5.1&times;), and pause the two Search ad groups that spent DKK 6,400 with no
        conversions.
      </>
    ),
    rows: [
      { name: 'Reels — Lookalike', value: '5.1× ROAS', tag: 'Scale', cls: 'up' },
      { name: 'Search · Generic shoes', value: 'DKK 3,900', tag: 'Pause', cls: 'dn' },
      { name: 'Search · Running gear', value: 'DKK 2,500', tag: 'Pause', cls: 'dn' },
    ],
  },
]

export default function AskVeraPanel() {
  const [active, setActive] = useState(0)
  const current = QUESTIONS[active]

  return (
    <div className="mtvq">
      <div className="mtql">
        {QUESTIONS.map((item, i) => (
          <button
            key={item.q}
            type="button"
            className={i === active ? 'on' : ''}
            onClick={() => setActive(i)}
          >
            <span className="mono">{String(i + 1).padStart(2, '0')}</span>
            {item.q}
          </button>
        ))}
      </div>

      <div className="mtqa">
        <div className="mtu" key={`u-${active}`}>{current.q}</div>
        <div className="mtvr" key={`vr-${active}`}>
          <VeraIconGlow />
          <p>{current.answer}</p>
        </div>
        <div className="mtqt" key={`qt-${active}`}>
          {current.rows.map(row => (
            <div key={row.name}>
              <span>{row.name}</span>
              <b>{row.value}</b>
              <em className={row.cls}>{row.tag}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
