'use client'

import { useState, useEffect, useRef } from 'react'

const RULES = [
  {
    label: 'Stop the bleed',
    connectors: ['When', 'on', 'goes', 'then', 'and'],
    tokens: ['CPA', 'Meta · Prospecting', 'above DKK 400', 'pause campaign', 'post in #marketing'],
    today: 2,
    week: 9,
  },
  {
    label: 'Scale the winners',
    connectors: ['When', 'on', 'goes', 'then', 'and'],
    tokens: ['ROAS', 'Google · all campaigns', 'above 4.0×', 'increase budget 15%', 'email me'],
    today: 1,
    week: 6,
  },
  {
    label: 'Catch creative fatigue',
    connectors: ['When', 'on', 'drops', 'then', 'and'],
    tokens: ['CTR', 'Meta · name contains “Spring”', '30% vs. baseline', 'post in #creative', 'decrease budget 10%'],
    today: 0,
    week: 3,
  },
]

const DWELL = 5 * 220 + 4500

export default function RuleBuilder() {
  const [ruleIndex, setRuleIndex] = useState(0)
  const [sentenceKey, setSentenceKey] = useState(0)
  const auto = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearAuto() {
    if (auto.current) { clearTimeout(auto.current); auto.current = null }
  }

  function play(n: number, user = false) {
    clearAuto()
    setRuleIndex(n)
    setSentenceKey(k => k + 1)
    if (!user) {
      auto.current = setTimeout(() => play((n + 1) % RULES.length), DWELL)
    }
  }

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) {
      play(0)
    }
    return clearAuto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleTab(n: number) {
    play(n, true)
  }

  const rule = RULES[ruleIndex]

  return (
    <div className="rp">
      <div className="rpl">
        <div className="rph">
          <div className="rtabs" role="tablist">
            {RULES.map((r, i) => (
              <button
                key={i}
                className={i === ruleIndex ? 'on' : ''}
                role="tab"
                aria-selected={i === ruleIndex}
                onClick={() => handleTab(i)}
              >
                {r.label}
              </button>
            ))}
          </div>
          <span className="pill dk sm">
            <i className="vd g" />
            Active
          </span>
        </div>

        <div className="rs" key={sentenceKey}>
          {rule.tokens.flatMap((token, i) => [
            <span key={`rw${i}`} className="rw">{rule.connectors[i]}</span>,
            <span
              key={`rt${i}`}
              className={`rt t${i}`}
              style={{ animationDelay: `${i * 220}ms` }}
            >
              {token}
            </span>,
          ])}
        </div>

        <div className="rmeta">
          <span className="mono">Checked every 2 min</span>
          <span className="mono">Every time</span>
          <span className="mono">Meta Ads &middot; Google Ads</span>
        </div>
      </div>

      <div className="ract">
        <div className="rph">
          <span className="mono">Activity</span>
          <span className="pill dk sm">
            <i className="vd g" />
            Active
          </span>
        </div>
        <div className="ract-stats">
          <div>
            <span className="mono">Triggered today</span>
            <b>{rule.today}</b>
          </div>
          <div>
            <span className="mono">Runs this week</span>
            <b>{rule.week}</b>
          </div>
        </div>
        <p className="ract-note">Checked every 2 minutes, day and night.</p>
      </div>
    </div>
  )
}
