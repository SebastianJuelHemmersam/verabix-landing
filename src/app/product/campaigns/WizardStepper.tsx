'use client'

import { useState } from 'react'

const STEPS = [
  {
    label: 'Platform',
    sub: 'Where to run',
    fields: [
      { k: 'Channel', v: 'Meta Ads · Google Ads · Both' },
      { k: 'Google type', v: 'Performance Max' },
      { k: 'Ad account', v: 'Nordic Run DK' },
    ],
  },
  {
    label: 'Goal',
    sub: 'What to optimise for',
    fields: [
      { k: 'Objective', v: 'Sales' },
      { k: 'Conversion event', v: 'Purchase' },
      { k: 'Bid strategy', v: 'Maximise conversion value' },
    ],
  },
  {
    label: 'Audience',
    sub: 'Who to reach',
    fields: [
      { k: 'Locations', v: 'Denmark · Sweden' },
      { k: 'Age', v: '25 – 54' },
      { k: 'Placements', v: 'Feed · Stories · Reels' },
    ],
  },
  {
    label: 'Budget',
    sub: 'Spend and timing',
    fields: [
      { k: 'Budget type', v: 'Daily' },
      { k: 'Daily budget', v: 'DKK 500' },
      { k: 'Schedule', v: '1 Oct → 31 Oct' },
    ],
  },
  {
    label: 'Creative',
    sub: 'Copy and visuals',
    fields: [
      { k: 'Headline', v: 'Autumn running gear. Free shipping.' },
      { k: 'Primary text', v: 'Waterproof layers built for Nordic weather.' },
      { k: 'Media', v: 'Images · Video' },
    ],
  },
  {
    label: 'Review',
    sub: 'Final check',
    fields: [
      { k: 'Channel', v: 'Meta + Google — Performance Max' },
      { k: 'Audience', v: 'DK, SE · 25–54' },
      { k: 'Budget', v: 'DKK 500 / day · 31 days' },
      { k: 'Status', v: 'Ready to launch' },
    ],
  },
]

export default function WizardStepper() {
  const [active, setActive] = useState(0)
  const step = STEPS[active]

  return (
    <div className="wz">
      <ol className="wzs">
        {STEPS.map((s, i) => (
          <li key={i}>
            <button
              className={i === active ? 'on' : i < active ? 'done' : ''}
              onClick={() => setActive(i)}
            >
              <span className="n">{i < active ? '✓' : String(i + 1).padStart(2, '0')}</span>
              <span className="t">
                <b>{s.label}</b>
                <em>{s.sub}</em>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div className="wzp">
        <div className="wzh">
          <h3>{step.label}</h3>
          <span className="mono">{active + 1} / {STEPS.length}</span>
        </div>
        {step.fields.map((f, i) => (
          <div
            key={`${active}-${i}`}
            className="wzr"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span>{f.k}</span>
            <b>{f.v}</b>
          </div>
        ))}
        <div className="wzf">
          <div className="wzbar">
            {STEPS.map((_, i) => (
              <i key={i} className={i === active ? 'on' : ''} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {active > 0 && (
              <button className="btn gh btn-xs" onClick={() => setActive(a => a - 1)}>
                Back
              </button>
            )}
            {active < STEPS.length - 1 ? (
              <button className="btn btn-primary btn-xs" onClick={() => setActive(a => a + 1)}>
                Next
              </button>
            ) : (
              <button className="btn btn-primary btn-xs" onClick={() => setActive(0)}>
                Launch ↗
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
