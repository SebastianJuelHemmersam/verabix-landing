'use client'

import { usePlanFinder, type PlanName } from './PlanFinderContext'

const PLANS: {
  key: PlanName
  name: string
  desc: string
  price: string
  workspaceLine: string
  features: { label: string; bold?: boolean }[]
}[] = [
  {
    key: 'starter',
    name: 'Starter',
    desc: 'For one brand or one business.',
    price: '€49',
    workspaceLine: '1 workspace',
    features: [
      { label: 'Vera in Verabix' },
      { label: 'Unlimited data sources' },
      { label: 'Dashboards, automations, campaigns' },
    ],
  },
  {
    key: 'pro',
    name: 'Pro',
    desc: 'For teams running a few brands or markets.',
    price: '€139',
    workspaceLine: '3 workspaces',
    features: [
      { label: 'Vera in Verabix' },
      { label: 'Vera in Slack', bold: true },
      { label: 'Unlimited data sources' },
      { label: 'Dashboards, automations, campaigns' },
    ],
  },
  {
    key: 'agency',
    name: 'Agency',
    desc: 'For agencies with a growing client list.',
    price: '€229',
    workspaceLine: 'Unlimited workspaces',
    features: [
      { label: 'Vera in Verabix' },
      { label: 'Vera in Slack', bold: true },
      { label: 'Unlimited data sources' },
      { label: 'Dashboards, automations, campaigns' },
    ],
  },
]

const WORKSPACE_OPTIONS = [
  { v: 1 as const, label: '1' },
  { v: 3 as const, label: '2–3' },
  { v: 9 as const, label: '4+' },
]

const SLACK_OPTIONS = [
  { v: 0 as const, label: 'No' },
  { v: 1 as const, label: 'Yes' },
]

export default function PlanFinderCards() {
  const { workspaces, slack, plan, setWorkspaces, setSlack } = usePlanFinder()
  const planLabel = plan === 'starter' ? 'Starter' : plan === 'pro' ? 'Pro' : 'Agency'
  const suffix =
    plan === 'pro' && workspaces === 1 ? ' — for Vera in Slack.' : plan === 'agency' ? ' — unlimited workspaces.' : '.'

  return (
    <>
      <div className="prf">
        <div className="prq">
          <span className="mono">How many clients, brands or markets?</span>
          <div className="prs" role="radiogroup" aria-label="Workspaces">
            {WORKSPACE_OPTIONS.map(o => (
              <button
                key={o.v}
                type="button"
                role="radio"
                aria-checked={workspaces === o.v}
                className={workspaces === o.v ? 'on' : ''}
                onClick={() => setWorkspaces(o.v)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <div className="prq">
          <span className="mono">Want Vera in Slack?</span>
          <div className="prs" role="radiogroup" aria-label="Vera in Slack">
            {SLACK_OPTIONS.map(o => (
              <button
                key={o.v}
                type="button"
                role="radio"
                aria-checked={slack === o.v}
                className={slack === o.v ? 'on' : ''}
                onClick={() => setSlack(o.v)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        <p className="prr">
          You need <b>{planLabel}</b>
          {suffix}
        </p>
      </div>

      <div className="prc">
        {PLANS.map(p => (
          <div key={p.key} className={`prk${plan === p.key ? ' fit' : ''}`} data-p={p.key}>
            <div className="prkh">
              <b>{p.name}</b>
              <span className="prfit">Your fit</span>
            </div>
            <p className="prd">{p.desc}</p>
            <div className="prp">
              <span>{p.price}</span>
              <em>/ month</em>
            </div>
            <div className="prw">{p.workspaceLine}</div>
            <ul>
              {p.features.map(f => (
                <li key={f.label}>{f.bold ? <b>{f.label}</b> : f.label}</li>
              ))}
            </ul>
            <a className="btn" href="https://app.verabix.com">
              Start free trial
            </a>
            <span className="prtr">7 days free · cancel anytime</span>
          </div>
        ))}
      </div>
      <p className="prnote">Prices in EUR, excl. VAT. Billed monthly.</p>
    </>
  )
}
